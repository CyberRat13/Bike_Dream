import { NextResponse } from 'next/server';
import { BikeScraper } from '@/lib/scraper/service';
import { brandConfigs } from '@/lib/scraper/configs';

export async function POST(request: Request) {
  try {
    const { brand } = await request.json();

    if (!brand || !brandConfigs[brand]) {
      return NextResponse.json(
        { error: 'Invalid brand specified' },
        { status: 400 }
      );
    }

    const scraper = new BikeScraper(brandConfigs[brand]);
    const bikes = await scraper.scrapeAllBikes();

    // Here you would typically save the bikes to your database
    // For now, we'll just return them
    return NextResponse.json({ bikes });
  } catch (error) {
    console.error('Scraping error:', error);
    return NextResponse.json(
      { error: 'Failed to scrape bikes' },
      { status: 500 }
    );
  }
} 