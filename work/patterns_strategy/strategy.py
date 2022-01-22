#------Do not change those imports------
from pandas import DataFrame
from bot_entity.bot import Bot
import talib.abstract as ta
from technical.util import resample_to_interval, resampled_merge
#---------------------------------------



# Do not change class and methods names
class Strategy(Bot):
    def calc_indicators(self, candles):
        candles['rsi'] = ta.RSI(candles, timeperiod=10)
        candles['roc'] = ta.ROCR100(candles, timeperiod=5)
        candles['3stars'] = ta.CDL3STARSINSOUTH(candles)
        candles['3linestrike'] = ta.CDL3LINESTRIKE(candles)
        candles['3soldiers'] = ta.CDL3WHITESOLDIERS(candles)
        candles['id3crows'] = ta.CDLIDENTICAL3CROWS(candles)
        candles['morning'] = ta.CDLMORNINGSTAR(candles)
        candles['eng'] = ta.CDLENGULFING(candles)
        candles['3crows'] = ta.CDL3BLACKCROWS(candles)
        candles['morningdoji'] = ta.CDLMORNINGDOJISTAR(candles)
        candles['3outside'] = ta.CDL3OUTSIDE(candles)
        candles['evening'] = ta.CDLEVENINGSTAR(candles)
        candles['eveningdoji'] = ta.CDLEVENINGDOJISTAR(candles)
        return candles

    def check_buy_signals(self, indicators):
        buy = False
        hist_roc = indicators.iloc[-2]['roc']
        act_roc = indicators.iloc[-1]['roc']

        interval_am = 3
        if hist_roc<99.5 and act_roc>=100.2:
            for i in range(-1, -1*(interval_am+1), -1):
                if ((indicators.iloc[i]['3stars']==100) or
                    (indicators.iloc[i]['3linestrike']==-100) or
                    (indicators.iloc[i]['3soldiers']==100) or
                    (indicators.iloc[i]['morning']==100) or
                    indicators.iloc[i]['eng']==100 or 
                    (indicators.iloc[i]['3outside']==100) or
                    (indicators.iloc[i]['morningdoji']==100)):
                    buy = True
                    break
        return buy

    def check_sell_signals(self, indicators):
         sell = False
        hist_roc = indicators.iloc[-2]['roc']
        act_roc = indicators.iloc[-1]['roc']    

        interval_am = 3
        if(hist_roc>100.2 and act_roc<=99.5):
            for i in range(-1, -1*(interval_am+1), -1):
                if(indicators.iloc[i]['id3crows']==-100 or
                    indicators.iloc[i]['eng']==-100 or 
                    indicators.iloc[i]['3crows']==-100 or
                    indicators.iloc[i]['evening']==-100 or
                    indicators.iloc[i]['3linestrike']==100 or
                    indicators.iloc[i]['eveningdoji']==-100):
                    sell = True
                    break            
        return sell