'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bike, BikeType } from '@/lib/types';
import { bikes as allBikes } from '@/lib/data';

const BikeComparison: React.FC = () => {
  const [selectedBikes, setSelectedBikes] = useState<Bike[]>([]);
  const [bikeType, setBikeType] = useState<BikeType | ''>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    // Filter bikes based on type and price range
    const filteredBikes = allBikes.filter(bike => {
      const matchesType = !bikeType || bike.type === bikeType;
      const matchesPrice = bike.price >= priceRange[0] && bike.price <= priceRange[1];
      return matchesType && matchesPrice;
    });
    setSelectedBikes(filteredBikes);
  }, [bikeType, priceRange]);

  const handleBikeTypeChange = (value: BikeType): void => {
    setBikeType(value);
  };

  const handlePriceRangeChange = (value: number[]): void => {
    setPriceRange([value[0], value[1]]);
  };

  const handleScroll = (direction: 'left' | 'right'): void => {
    const scrollAmount = 300; // Adjust based on your needs
    setScrollPosition((prev: number) => 
      direction === 'left' 
        ? Math.max(0, prev - scrollAmount)
        : prev + scrollAmount
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Bike Comparison</h1>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <Label>Bike Type</Label>
            <Select onValueChange={handleBikeTypeChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select bike type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="road">Road</SelectItem>
                <SelectItem value="mountain">Mountain</SelectItem>
                <SelectItem value="gravel">Gravel</SelectItem>
                <SelectItem value="urban">Urban</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Price Range</Label>
            <div className="flex items-center gap-4">
              <Input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-24"
              />
              <span>to</span>
              <Input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-24"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bike Comparison Slider */}
      <div className="relative">
        <div className="overflow-x-auto">
          <div 
            className="flex gap-4 transition-transform duration-300"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {selectedBikes.map((bike) => (
              <Card key={bike.id} className="min-w-[300px] p-4">
                <h3 className="text-xl font-semibold">{bike.name}</h3>
                <p className="text-gray-600">{bike.brand}</p>
                <p className="text-2xl font-bold mt-2">${bike.price}</p>
                <div className="mt-4">
                  <h4 className="font-medium">Specifications</h4>
                  <ul className="mt-2 space-y-1">
                    <li>Frame: {bike.specs.frame}</li>
                    <li>Groupset: {bike.specs.groupset}</li>
                    <li>Weight: {bike.specs.weight}kg</li>
                    <li>Wheel Size: {bike.specs.wheelSize}</li>
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          className="absolute left-0 top-1/2 -translate-y-1/2"
          onClick={() => handleScroll('left')}
        >
          ←
        </Button>
        <Button
          variant="outline"
          className="absolute right-0 top-1/2 -translate-y-1/2"
          onClick={() => handleScroll('right')}
        >
          →
        </Button>
      </div>
    </div>
  );
};

export default BikeComparison; 