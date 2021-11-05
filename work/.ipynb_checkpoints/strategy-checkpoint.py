import sys

from bot_entity.bot import Bot


class Strategy(Bot):

    def calc_indicators(self, currency_pair):
        pass

    def check_buy_signals(self, indicators):
        pass

    def check_sell_signals(self, indicators):
        pass

if __name__ == '__main__':
    bot = Strategy(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4])
    # bot = Strategy("bot1", './strategy.py', '../../yml_configs/example_config.yml', 'localhost:55043')
