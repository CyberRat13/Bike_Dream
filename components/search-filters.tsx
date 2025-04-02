"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function SearchFilters({ initialType = "" }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [filters, setFilters] = useState({
    type: initialType ? [initialType] : [],
    brand: [],
    priceRange: [0, 10000],
    material: [],
    wheelSize: [],
  })

  const updateFilters = (category: string, value: string) => {
    setFilters((prev) => {
      const currentValues = prev[category] as string[]

      if (currentValues.includes(value)) {
        return {
          ...prev,
          [category]: currentValues.filter((v) => v !== value),
        }
      } else {
        return {
          ...prev,
          [category]: [...currentValues, value],
        }
      }
    })
  }

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    // Clear existing filter params
    params.delete("type")
    params.delete("brand")
    params.delete("minPrice")
    params.delete("maxPrice")
    params.delete("material")
    params.delete("wheelSize")

    // Add new filter params
    if (filters.type.length) {
      filters.type.forEach((type) => params.append("type", type))
    }

    if (filters.brand.length) {
      filters.brand.forEach((brand) => params.append("brand", brand))
    }

    if (filters.material.length) {
      filters.material.forEach((material) => params.append("material", material))
    }

    if (filters.wheelSize.length) {
      filters.wheelSize.forEach((size) => params.append("wheelSize", size))
    }

    params.set("minPrice", filters.priceRange[0].toString())
    params.set("maxPrice", filters.priceRange[1].toString())

    router.push(`/search?${params.toString()}`)
  }

  const resetFilters = () => {
    setFilters({
      type: [],
      brand: [],
      priceRange: [0, 10000],
      material: [],
      wheelSize: [],
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          Reset
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["type", "brand", "price"]}>
        <AccordionItem value="type">
          <AccordionTrigger>Bike Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Mountain", "Road", "Hybrid", "Electric", "Gravel", "City", "Kids"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`type-${type.toLowerCase()}`}
                    checked={filters.type.includes(type.toLowerCase())}
                    onCheckedChange={() => updateFilters("type", type.toLowerCase())}
                  />
                  <Label htmlFor={`type-${type.toLowerCase()}`}>{type}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Trek", "Specialized", "Giant", "Cannondale", "Santa Cruz", "Canyon", "BMC", "Cervélo"].map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand.toLowerCase()}`}
                    checked={filters.brand.includes(brand.toLowerCase())}
                    onCheckedChange={() => updateFilters("brand", brand.toLowerCase())}
                  />
                  <Label htmlFor={`brand-${brand.toLowerCase()}`}>{brand}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[0, 10000]}
                max={10000}
                step={100}
                value={filters.priceRange}
                onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
              />
              <div className="flex items-center justify-between">
                <span>${filters.priceRange[0]}</span>
                <span>${filters.priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="material">
          <AccordionTrigger>Frame Material</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Carbon", "Aluminum", "Steel", "Titanium"].map((material) => (
                <div key={material} className="flex items-center space-x-2">
                  <Checkbox
                    id={`material-${material.toLowerCase()}`}
                    checked={filters.material.includes(material.toLowerCase())}
                    onCheckedChange={() => updateFilters("material", material.toLowerCase())}
                  />
                  <Label htmlFor={`material-${material.toLowerCase()}`}>{material}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="wheelSize">
          <AccordionTrigger>Wheel Size</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {['26"', '27.5"', '29"', "700c"].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox
                    id={`wheel-${size.replace(/["]/g, "")}`}
                    checked={filters.wheelSize.includes(size)}
                    onCheckedChange={() => updateFilters("wheelSize", size)}
                  />
                  <Label htmlFor={`wheel-${size.replace(/["]/g, "")}`}>{size}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button onClick={applyFilters} className="w-full">
        Apply Filters
      </Button>
    </div>
  )
}

