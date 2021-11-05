
import sys
from bot_entity.bot import Bot

class Strategy(Bot):

    def calc_indicators(self, currency_pair):
        print("kalkuluje...")

    def check_buy_signals(self, indicators):
        print("sprawdzam kupowanie...")

    def check_sell_signals(self, indicators):
        print("sprawdzam sprzedawanie...")

if __name__ == '__main__':
    bot = Strategy(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4])
