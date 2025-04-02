"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function SearchForm() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [bikeType, setBikeType] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()

    if (searchQuery) {
      params.append("q", searchQuery)
    }

    if (bikeType) {
      params.append("type", bikeType)
    }

    router.push(`/search?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            type="text"
            placeholder="Search by brand, model, or features..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={bikeType} onValueChange={setBikeType}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Bike Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mountain">Mountain</SelectItem>
            <SelectItem value="road">Road</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
            <SelectItem value="electric">Electric</SelectItem>
            <SelectItem value="gravel">Gravel</SelectItem>
            <SelectItem value="city">City</SelectItem>
            <SelectItem value="kids">Kids</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">Search</Button>
      </div>
      <div className="flex flex-wrap gap-2 text-sm justify-center">
        <span className="text-gray-500">Popular:</span>
        <Button
          variant="link"
          className="h-auto p-0"
          onClick={() => {
            setSearchQuery("mountain bike")
            setBikeType("mountain")
          }}
        >
          Mountain Bikes
        </Button>
        <Button
          variant="link"
          className="h-auto p-0"
          onClick={() => {
            setSearchQuery("electric bike")
            setBikeType("electric")
          }}
        >
          E-Bikes
        </Button>
        <Button
          variant="link"
          className="h-auto p-0"
          onClick={() => {
            setSearchQuery("gravel bike")
            setBikeType("gravel")
          }}
        >
          Gravel Bikes
        </Button>
      </div>
    </form>
  )
}

