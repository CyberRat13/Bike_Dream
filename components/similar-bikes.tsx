import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data - would normally come from a database or API
const bikes = [
  {
    id: 1,
    name: "Trek Fuel EX 9.8",
    brand: "Trek",
    type: "Mountain",
    price: 5999.99,
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 2,
    name: "Specialized Tarmac SL7",
    brand: "Specialized",
    type: "Road",
    price: 7499.99,
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 3,
    name: "Canyon Grail CF SL 8",
    brand: "Canyon",
    type: "Gravel",
    price: 3499.99,
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 4,
    name: "Giant Revolt Advanced 0",
    brand: "Giant",
    type: "Gravel",
    price: 3800.0,
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: 5,
    name: "Cannondale Synapse Carbon",
    brand: "Cannondale",
    type: "Road",
    price: 2799.99,
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: 6,
    name: "Santa Cruz Hightower",
    brand: "Santa Cruz",
    type: "Mountain",
    price: 4599.99,
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
]

export function SimilarBikes({ currentBikeId, bikeType }: { currentBikeId: number; bikeType: string }) {
  // Filter bikes of the same type, excluding the current bike
  const similarBikes = bikes
    .filter((bike) => bike.type.toLowerCase() === bikeType.toLowerCase() && bike.id !== currentBikeId)
    .slice(0, 4) // Limit to 4 similar bikes

  if (similarBikes.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No similar bikes found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {similarBikes.map((bike) => (
        <Link key={bike.id} href={`/bikes/${bike.id}`}>
          <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
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
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold truncate">{bike.name}</h3>
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm text-gray-500">{bike.brand}</span>
                <span className="text-sm text-gray-500">{bike.type}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="text-lg font-bold">${bike.price.toLocaleString()}</div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}

