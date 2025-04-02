'use client';

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, BarChart2 } from "lucide-react"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { bikes as mockBikeData } from '@/lib/data';

export function SearchResults({ query = "", type = "" }) {
  // Filter bikes based on search parameters
  const filteredBikes = mockBikeData.filter((bike) => {
    // Filter by search query
    const matchesQuery = bike.name.toLowerCase().includes(query.toLowerCase()) ||
      bike.brand.toLowerCase().includes(query.toLowerCase());

    // Filter by type if specified
    const matchesType = !type || bike.type.toLowerCase() === type.toLowerCase();

    return matchesQuery && matchesType;
  });

  if (filteredBikes.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No bikes found</h3>
        <p className="text-gray-500">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Search Results</h1>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <Label>Bike Type</Label>
            <Select>
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
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">{filteredBikes.length} bikes found</p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <BarChart2 className="h-4 w-4 mr-2" />
              Compare
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBikes.map((bike) => (
            <Card key={bike.id} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={bike.image || "/placeholder.svg"}
                  alt={bike.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                {bike.featured && (
                  <Badge className="absolute top-2 right-2" variant="secondary">
                    Featured
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 left-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white/90"
                >
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between">
                  <div className="text-sm font-medium text-gray-500">{bike.brand}</div>
                  <div className="text-sm font-medium text-gray-500 capitalize">{bike.type}</div>
                </div>
                <h3 className="font-bold mt-1 truncate">{bike.name}</h3>
                <div className="mt-2 text-sm text-gray-500 space-y-1">
                  <div className="flex justify-between">
                    <span>Frame:</span>
                    <span>{bike.specs.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wheels:</span>
                    <span>{bike.specs.wheelSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gears:</span>
                    <span>{bike.specs.gears}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="text-lg font-bold">${bike.price.toLocaleString()}</div>
                <Link href={`/bikes/${bike.id}`}>
                  <Button size="sm">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

