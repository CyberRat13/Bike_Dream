export interface ScraperConfig {
  baseUrl: string;
  selectors: {
    bikeList: string;
    bikeName: string;
    bikeBrand: string;
    bikeType: string;
    bikePrice: string;
    bikeSpecs: {
      frame: string;
      groupset: string;
      weight: string;
      wheelSize: string;
    };
  };
  rateLimit: {
    requestsPerMinute: number;
    delayBetweenRequests: number;
  };
}

export interface ScrapedBike {
  name: string;
  brand: string;
  type: string;
  price: number;
  specs: {
    frame: string;
    groupset: string;
    weight: number;
    wheelSize: string;
  };
  sourceUrl: string;
  lastUpdated: Date;
} 