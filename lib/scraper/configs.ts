import { ScraperConfig } from './types';

export const brandConfigs: Record<string, ScraperConfig> = {
  specialized: {
    baseUrl: 'https://www.specialized.com/us/en/bikes',
    selectors: {
      bikeList: '.product-tile__link',
      bikeName: '.product-tile__title',
      bikeBrand: '.product-tile__brand',
      bikeType: '.product-tile__category',
      bikePrice: '.product-tile__price',
      bikeSpecs: {
        frame: '.specs__frame-material',
        groupset: '.specs__groupset',
        weight: '.specs__weight',
        wheelSize: '.specs__wheel-size',
      },
    },
    rateLimit: {
      requestsPerMinute: 30,
      delayBetweenRequests: 2000,
    },
  },
  trek: {
    baseUrl: 'https://www.trekbikes.com/us/en_US/bikes/',
    selectors: {
      bikeList: '.product-tile__link',
      bikeName: '.product-tile__title',
      bikeBrand: '.product-tile__brand',
      bikeType: '.product-tile__category',
      bikePrice: '.product-tile__price',
      bikeSpecs: {
        frame: '.specs__frame-material',
        groupset: '.specs__groupset',
        weight: '.specs__weight',
        wheelSize: '.specs__wheel-size',
      },
    },
    rateLimit: {
      requestsPerMinute: 30,
      delayBetweenRequests: 2000,
    },
  },
  // Add more brands here
}; 