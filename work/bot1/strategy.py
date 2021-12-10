#------Do not change those imports------
from pandas import DataFrame
from bot_entity.bot import Bot
import talib.abstract as ta
from technical.util import resample_to_interval, resampled_merge
#---------------------------------------



# Do not change class and methods names

class Strategy(Bot):

    def calc_indicators(self, candles:DataFrame):
        # bollinger = qtpylib.bollinger_bands(qtpylib.typical_price(dataframe), window=10, stds=2)

        # print(trend.STCIndicator(dataframe['close']).stc())

        dataframe_long = resample_to_interval(candles, 240)
        dataframe_long['rsi'] = ta.RSI(dataframe_long, timeperiod=9)
        dataframe = resampled_merge(candles, dataframe_long)

        dataframe['rsi'] = ta.RSI(dataframe, timeperiod=14)
        dataframe['ema'] = ta.EMA(dataframe, timeperiod=50)
        dataframe['sma2'] = ta.SMA(dataframe, timeperiod=50)
        dataframe['roc'] = ta.ROC(dataframe, timeperiod=5)
        # dataframe['bb_lowerband'] = bollinger['lower']
        # dataframe['bb_middleband'] = bollinger['mid']
        # dataframe['bb_upperband'] = bollinger['upper']

        dataframe['sma1'] = ta.SMA(dataframe, timeperiod=20)
        dataframe['sma3'] = ta.SMA(dataframe, timeperiod=5)
        dataframe['sma'] = ta.SMA(dataframe, timeperiod=166)

        dataframe.fillna(method='ffill', inplace=True)

        return dataframe

    def check_buy_signals(self, indicators):

        buy = False
        # DOWN TREND
        if (# (indicators['rsi'] < 30) &
                    (indicators['volume'] > 0) &
                    (indicators['close'] > indicators['open']) &
                    # (indicators['close'].shift(1) > indicators['open'].shift(1)) &
                    (indicators['rsi'].shift(1) < indicators['rsi']) &
                    # (indicators['rsi'].shift(2) < indicators['rsi'].shift(1)) 
                    # ((indicators['close'].shift(2) < indicators['bb_lowerband'].shift(2)) |
                    #  (indicators['close'].shift(1) < indicators['bb_lowerband'].shift(1)) |
                    #  (indicators['close'] < indicators['bb_lowerband'])) &
                    # (indicators['close'] < ((indicators['bb_lowerband'] + indicators['bb_middleband']) / 2)) &
                    (((indicators['sma'] - indicators['sma'].shift(1)) / indicators['sma']) * 100 > -0.3) &
                    (((indicators['sma'] - indicators['sma'].shift(1)) / indicators['sma']) * 100 < 0.15)

            ):
            buy = False

        # UP TREND
        if (
                # (indicators['rsi'] < 30) &
                    (indicators['volume'] > 0) &
                    (indicators['close'] > indicators['open']) &
                    (indicators['rsi'].shift(1) < indicators['rsi']) &
                    # (indicators['close'] < ((indicators['bb_upperband'] + indicators['bb_middleband']) / 2)) &
                    # (indicators['rsi'].shift(2) < indicators['rsi'].shift(1)) 
                    # ((indicators['low'].shift(2) < indicators['bb_lowerband'].shift(2)) |
                    # ((indicators['close'].shift(1) < indicators['bb_middleband'].shift(1)) |
                    #  (indicators['close'].shift(2) < indicators['bb_middleband'].shift(2)) |
                    #  (indicators['close'] < indicators['bb_middleband'])) &
                    (((indicators['sma'] - indicators['sma'].shift(1)) / indicators['sma']) * 100 >= 0.15)

            ):
            buy = True


        if(
                # (indicators['buy'] >= 1) &
                (indicators['resample_240_rsi'] > 110)
                # (indicators['low'] < indicators['bb_lowerband'])
            ):

            buy:False
        
        return buy


    def check_sell_signals(self, indicators):
        sell = False
        # UP TREND
        if (
                    (((indicators['sma'] - indicators['sma'].shift(1)) / indicators['sma']) * 100 >= 0.15) &
                    # ((indicators['close'].shift(1) > indicators['bb_upperband'].shift(1)) |
                    #  (indicators['close'].shift(2) > indicators['bb_upperband'].shift(2)) |
                    #  (indicators['close'] > indicators['bb_upperband'])) &
                    # (indicators['rsi'] > 70) &
                    (indicators['volume'] > 0) &
                    (indicators['rsi'].shift(2) > indicators['rsi'].shift(1)) &
                    (indicators['rsi'].shift(1) > indicators['rsi'])

            ):
            sell = True

        if (
                    (indicators['ema'].shift(1) < indicators['ema']) &
                    # (indicators['close'] > indicators['bb_middleband']) &
                    # (indicators['rsi'].shift(2) > indicators['rsi'].shift(1)) &
                    (indicators['rsi'].shift(1) > indicators['rsi']) &
                    # (indicators['sma3'].shift(3) < indicators['sma3'].shft(2)) &
                    (indicators['sma3'].shift(2) < indicators['sma3'].shift(1)) &
                    (indicators['sma3'].shift(1) < indicators['sma3']) &
                    ((indicators['rsi'] > 65) |
                     # (indicators['rsi'].shift(4) > 65) |
                     (indicators['rsi'].shift(3) > 65) |
                     (indicators['rsi'].shift(2) > 65) |
                     (indicators['rsi'].shift(1) > 65))
            ):
            dell = True

        # DOWN TREND
        if (
                    (((indicators['sma'] - indicators['sma'].shift(1)) / indicators['sma']) * 100 > -0.3) &
                    (((indicators['sma'] - indicators['sma'].shift(1)) / indicators['sma']) * 100 < 0.15) &
                    (indicators['close'] < indicators['open']) &
                    (indicators['close'].shift(1) < indicators['open'].shift(1)) &
                    # (indicators['rsi'].shift(1) > 70) &
                    # (indicators['rsi'] < 70) &
                    # (indicators['rsi'] > 60) &
                    (indicators['volume'] > 0) &
                    # (indicators['high'] > indicators['bb_middleband']) &
                    (indicators['rsi'].shift(1) > indicators['rsi'])
                # (indicators['rsi'].shift(2) > indicators['rsi'].shift(1))

            ):
            sell = True

        if(
                    (indicators['open'].shift(1) > indicators['close']) &
                    (indicators['open'].shift(1) > indicators['close'].shift(1)) &
                    (indicators['open'].shift(2) > indicators['close'].shift(2)) &
                    (indicators['open'].shift(3) > indicators['close'].shift(3)) &
                    (indicators['open'].shift(4) > indicators['close'].shift(4)) &
                    (indicators['low'] < indicators['bb_lowerband'])
                # (indicators['stc'] > 30) &
                # (indicators['stc'] <= indicators['stc'].shift(1))
                # (indicators['stc'] < indicators['stc'].shift(1))
            ):
            sell = True

        if indicators.loc[(indicators['volume'] > 0)]:
            sell = False
            
        return sell

