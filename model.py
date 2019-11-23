class City(object):
    def __init__(self, name, state, country, capital=False, population=0,
                 regions=[]):
        self.name = name
        self.state = state
        self.country = country
        self.capital = capital
        self.population = population
        self.regions = regions

    @staticmethod
    def from_dict(source):
        city = City(source[u'name'], source[u'state'], source[u'country'])

        if u'capital' in source:
            city.capital = source[u'capital']

        if u'population' in source:
            city.population = source[u'population']

        if u'regions' in source:
            city.regions = source[u'regions']

        return city
        # [END_EXCLUDE]

    def to_dict(self):
        # [START_EXCLUDE]
        dest = {
            u'name': self.name,
            u'state': self.state,
            u'country': self.country
        }

        if self.capital:
            dest[u'capital'] = self.capital

        if self.population:
            dest[u'population'] = self.population

        if self.regions:
            dest[u'regions'] = self.regions

        return dest
        # [END_EXCLUDE]

    def __repr__(self):
        return(
            u'City(name={}, country={}, population={}, capital={}, regions={})'
            .format(self.name, self.country, self.population, self.capital,
                    self.regions))