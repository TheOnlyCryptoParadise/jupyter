#------Do not change those imports------
from pandas import DataFrame
from bot_entity.bot import Bot
import talib.abstract as ta
from technical.util import resample_to_interval, resampled_merge
#---------------------------------------

# Do not change class and methods names

class Strategy(Bot):

    def calc_indicators(self, candles:DataFrame):
        candles['sma'] = ta.SMA(candles, timeperiod=20)
        candles['ema'] = ta.EMA(candles, timeperiod=20)
        candles['rsi'] = ta.RSI(candles, timeperiod=10)
        return candles


    def check_buy_signals(self, indicators):
        buy = False
        threshold = 28
        if(indicators.iloc[-1]['sma'] < indicators.iloc[-1]['ema'] and 
          indicators.iloc[-2]['sma'] >= indicators.iloc[-2]['ema'] and (
              (indicators.iloc[-1]['rsi'] >= threshold and indicators.iloc[-2]['rsi'] < threshold) or
              (indicators.iloc[-2]['rsi'] >= threshold and indicators.iloc[-3]['rsi'] < threshold) or
              (indicators.iloc[-3]['rsi'] >= threshold and indicators.iloc[-4]['rsi'] < threshold) or
              (indicators.iloc[-4]['rsi'] >= threshold and indicators.iloc[-5]['rsi'] < threshold) or
              (indicators.iloc[-5]['rsi'] >= threshold and indicators.iloc[-6]['rsi'] < threshold) or
              (indicators.iloc[-6]['rsi'] >= threshold and indicators.iloc[-7]['rsi'] < threshold) or
              (indicators.iloc[-7]['rsi'] >= threshold and indicators.iloc[-8]['rsi'] < threshold)
          )):
            buy = True

        return buy


    def check_sell_signals(self, indicators):
        sell = False
        threshold = 68.5
        if(indicators.iloc[-1]['sma'] > indicators.iloc[-1]['ema'] and 
          indicators.iloc[-2]['sma'] <= indicators.iloc[-2]['ema'] and (
              (indicators.iloc[-1]['rsi'] <= threshold and indicators.iloc[-2]['rsi'] > threshold) or
              (indicators.iloc[-2]['rsi'] <= threshold and indicators.iloc[-3]['rsi'] > threshold) or
              (indicators.iloc[-3]['rsi'] <= threshold and indicators.iloc[-4]['rsi'] > threshold) or
              (indicators.iloc[-4]['rsi'] <= threshold and indicators.iloc[-5]['rsi'] > threshold) or
              (indicators.iloc[-5]['rsi'] <= threshold and indicators.iloc[-6]['rsi'] > threshold) or
              (indicators.iloc[-6]['rsi'] <= threshold and indicators.iloc[-7]['rsi'] > threshold) or
              (indicators.iloc[-7]['rsi'] <= threshold and indicators.iloc[-8]['rsi'] > threshold)
          )):
            sell = True

        return sell
