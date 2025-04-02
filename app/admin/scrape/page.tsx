'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { brandConfigs } from '@/lib/scraper/configs';

export default function ScrapePage() {
  const [scraping, setScraping] = useState(false);
  const [results, setResults] = useState<Record<string, any>>({});

  const handleScrape = async (brand: string) => {
    setScraping(true);
    try {
      const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ brand }),
      });

      const data = await response.json();
      setResults(prev => ({
        ...prev,
        [brand]: data,
      }));
    } catch (error) {
      console.error('Scraping error:', error);
      setResults(prev => ({
        ...prev,
        [brand]: { error: 'Failed to scrape bikes' },
      }));
    } finally {
      setScraping(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Bike Scraping Admin</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(brandConfigs).map(([brand, config]) => (
          <Card key={brand} className="p-4">
            <h2 className="text-xl font-semibold mb-2 capitalize">{brand}</h2>
            <p className="text-sm text-gray-600 mb-4">{config.baseUrl}</p>
            <Button
              onClick={() => handleScrape(brand)}
              disabled={scraping}
            >
              {scraping ? 'Scraping...' : 'Start Scraping'}
            </Button>
            
            {results[brand] && (
              <div className="mt-4">
                <h3 className="font-medium mb-2">Results:</h3>
                <pre className="text-sm bg-gray-50 p-2 rounded">
                  {JSON.stringify(results[brand], null, 2)}
                </pre>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
} 