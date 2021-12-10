import logging
import crypto_package
from datetime import date, datetime, timedelta

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
    def __init__(self):
        self._logger = logging.getLogger(__name__)
        self._logger.info("starting")
        self._open_trades = []
        

    def test_strategy(self, exchange, strategy, pairs, candle_size, start_amount=1000, time_start=None, time_end=None, last_n_days=None, additional_candles=100):
        if last_n_days and not time_end and not time_start:
            time_end = datetime.now()
            time_start = time_end - timedelta(days=last_n_days)
        elif not time_end and time_start:
            time_end = datetime.now()
            time_start = datetime.fromisoformat(time_start)
        else:
            raise ValueError("You need to provide at least time_start or last_n_days")
        
        time_start = time_start - timedelta(seconds=additional_candles*candle_size_to_seconds(candle_size))
        
        all_candles = {}
        for pair in pairs:
            all_candles[pair] = crypto_package.get_candles(exchange, pair, candle_size, time_start, time_end)[0]

        no_candles = all_candles[pair[0]].shape[0]

        for i in range(100, no_candles):
            
            for k, v in all_candles.items():
                candles_portion = v.iloc[0:i]


    def _calculate(self, currency_pair):
        """
        Main function which calculates user defined strategy and trades based on calculations.
        :param currency_pair: pair from config on which do calculations
        :return: None
        """
        indicators = self.calc_indicators(currency_pair)
        if self.check_buy_signals(indicators):
            self._buy(currency_pair)
        if self.check_sell_signals(indicators):
            self._sell(currency_pair)

        self._send_notifications()
        self._send_trades()