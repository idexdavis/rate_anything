from configparser import ConfigParser

cfg = None

config_file = 'config.ini'

def init():
    print("Config parser init")
    cfg = ConfigParser()
    cfg.read(config_file)
    first_run = cfg.getboolean('database','first_boot')
    if first_run == True:
        cfg['database']['first_boot'] = 'False'
        

def getCFG():
    return cfg

def writeBackIni():
    with open(config_file, 'w') as cfgfile:
        cfg.write(cfgfile)