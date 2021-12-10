import logging
import crypto_package
from datetime import date, datetime, timedelta
from pprint import pprint
from numpy import double
import yaml
import talib.abstract as ta
import pydantic

from analyze_functions import plot_balance
from models import Trade, AnalysisResult

def candle_size_to_seconds(cs):
    num = int(cs[:-1])
    s = cs[-1]
    if s == "m":
        return num * 60
    elif s == "h":
        return num * 3600
    elif s == "d":
        return num * 3600 * 24
    elif s == "w":
        return num * 3600 * 24 * 7
    elif s == "M":
        return num * 3600 * 24 * 30


class FakeBot():
    def __init__(self, config_path):
        self._logger = logging.getLogger(__name__)
        # self._logger.setLevel(logging.DEBUG)
        self._logger.info("starting")
        with open(config_path, "r") as f:
            self.config = yaml.safe_load(f.read())

    def _reset_state(self, start_balance):
        self._current_balance = start_balance
        self._start_balance = start_balance
        self._open_trades = {p:[] for p in self.config['currency_pairs']}
        self._all_trades = []

    def test_strategy(self, calc_ind_f, buy_sig_f, sell_sig_f, start_balance=1000, time_start=None, time_end=None, last_n_days=None):
        self._reset_state(start_balance)
        if last_n_days and not time_end and not time_start:
            time_end = datetime.now()
            time_start = time_end - timedelta(days=last_n_days)
        elif not time_end and time_start:
            time_end = datetime.now()
            time_start = datetime.fromisoformat(time_start)
        else:
            raise ValueError("You need to provide at least time_start or last_n_days")
        
        time_start = time_start - timedelta(seconds=self.config['last_n_candles']*candle_size_to_seconds(self.config['ticker']))
        
        all_candles = {}
        for pair in self.config['currency_pairs']:
            all_candles[pair] = crypto_package.get_candles(self.config['exchange'], pair, self.config['ticker'], time_start, time_end)[0]

        self._logger.debug(f"download necessary candles: " + str({k: v.shape for k, v in all_candles.items()}))
        no_candles = all_candles[self.config['currency_pairs'][0]].shape[0]

        for i in range(100, no_candles):
            
            for k, v in all_candles.items():
                candles_portion = v.iloc[0:i]
                self._process_candles(calc_ind_f, buy_sig_f, sell_sig_f, k, candles_portion)
        return AnalysisResult(trades=self._all_trades, start_balance=self._start_balance, end_balance=self._current_balance, start_datetime=time_start, end_datetime=time_end)
        # return {"trades": self._all_trades, "balance": self._current_balance, "start_balance": self._start_balance}


    def _process_candles(self, calc_ind_f, buy_sig_f, sell_sig_f, currency_pair, df):

        indicators = calc_ind_f(df)
        if buy_sig_f(indicators):
            amount = self.config['transaction_amount'] / df.iloc[-1]['close']
            trade = Trade(is_buy=True, pair=currency_pair, amount=amount, price=df.iloc[-1]['close'], timestamp=datetime.fromtimestamp(df.iloc[-1]['time']))
            self._try_buy(trade)

        if sell_sig_f(indicators):
            if self.config['sell_all']:
                for btrade in self._open_trades[currency_pair]:
                    self._sell_open_trade(btrade, df.iloc[-1]['close'], timestamp=datetime.fromtimestamp(df.iloc[-1]['time']))
            else:
                raise NotImplementedError()

    def _try_buy(self, trade):
        if self._current_balance >= trade.amount*trade.price:
            self._logger.debug(f"bought {trade.pair} price:{trade.price} amount:{trade.amount} value:{trade.amount*trade.price}")
            self._current_balance -= trade.amount*trade.price
            self._open_trades[trade.pair].append(trade)
            self._all_trades.append(trade)
        else:
            self._logger.debug("insufficient balance")
            

    def _sell(self, trade):
        self._logger.debug("sold  {trade.pair} price:{trade.price} amount:{trade.amount} value:{trade.amount*trade.price}")
        self._all_trades.append(trade)
        self._current_balance += trade.amount * trade.price
    
    def _sell_open_trade(self, open_trade, price, timestamp):
        trade = Trade(is_buy=False, pair=open_trade.pair, amount=open_trade.amount, price=price, timestamp=timestamp)
        self._sell(trade)
        self._open_trades[open_trade.pair].remove(open_trade)




if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    def calc_ind(dataframe):
        dataframe['rsi'] = ta.RSI(dataframe, timeperiod=14)
        return dataframe

    def buy_sig(dataframe):
        if dataframe.iloc[-1]['rsi'] > 70:
            return True
        else:
            return False
    
    def sell_sig(dataframe):
        if dataframe.iloc[-1]['rsi'] < 30:
            return True
        else:
            return False
    
    fbot = FakeBot("../work/bot1/config.yml")
    res = fbot.test_strategy(calc_ind, buy_sig, sell_sig, last_n_days=10)
    plot_balance(res)
