import { ScraperConfig, ScrapedBike } from './types';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { delay } from '@/lib/utils';

export class BikeScraper {
  private config: ScraperConfig;
  private lastRequestTime: number = 0;

  constructor(config: ScraperConfig) {
    this.config = config;
  }

  private async respectRateLimit(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    const minDelay = (60 * 1000) / this.config.rateLimit.requestsPerMinute;

    if (timeSinceLastRequest < minDelay) {
      await delay(minDelay - timeSinceLastRequest);
    }

    this.lastRequestTime = Date.now();
  }

  private async fetchPage(url: string): Promise<string> {
    await this.respectRateLimit();
    
    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'CycleFinder Bot/1.0',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      throw error;
    }
  }

  private extractPrice(priceText: string): number {
    const matches = priceText.match(/\$?([0-9,]+\.?[0-9]*)/);
    if (!matches) return 0;
    return parseFloat(matches[1].replace(/,/g, ''));
  }

  private extractWeight(weightText: string): number {
    const matches = weightText.match(/([0-9.]+)\s*(?:kg|lbs)/i);
    if (!matches) return 0;
    return parseFloat(matches[1]);
  }

  private async scrapeBikePage(url: string): Promise<ScrapedBike | null> {
    const html = await this.fetchPage(url);
    const $ = cheerio.load(html);

    try {
      const bike: ScrapedBike = {
        name: $(this.config.selectors.bikeName).text().trim(),
        brand: $(this.config.selectors.bikeBrand).text().trim(),
        type: $(this.config.selectors.bikeType).text().trim().toLowerCase(),
        price: this.extractPrice($(this.config.selectors.bikePrice).text()),
        specs: {
          frame: $(this.config.selectors.bikeSpecs.frame).text().trim(),
          groupset: $(this.config.selectors.bikeSpecs.groupset).text().trim(),
          weight: this.extractWeight($(this.config.selectors.bikeSpecs.weight).text()),
          wheelSize: $(this.config.selectors.bikeSpecs.wheelSize).text().trim(),
        },
        sourceUrl: url,
        lastUpdated: new Date(),
      };

      return bike;
    } catch (error) {
      console.error(`Error scraping bike page ${url}:`, error);
      return null;
    }
  }

  public async scrapeAllBikes(): Promise<ScrapedBike[]> {
    const bikes: ScrapedBike[] = [];
    const html = await this.fetchPage(this.config.baseUrl);
    const $ = cheerio.load(html);

    const bikeUrls = $(this.config.selectors.bikeList)
      .map((_, el) => $(el).attr('href'))
      .get()
      .filter(Boolean);

    for (const url of bikeUrls) {
      const bike = await this.scrapeBikePage(url);
      if (bike) {
        bikes.push(bike);
      }
    }

    return bikes;
  }
} 