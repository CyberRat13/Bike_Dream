import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    id: "mountain",
    name: "Mountain",
    description: "Off-road adventures",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "road",
    name: "Road",
    description: "Speed and efficiency",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "hybrid",
    name: "Hybrid",
    description: "Versatile performance",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "electric",
    name: "Electric",
    description: "Power-assisted riding",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "gravel",
    name: "Gravel",
    description: "Mixed-terrain exploration",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "city",
    name: "City",
    description: "Urban commuting",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function BikeCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
      {categories.map((category) => (
        <Link key={category.id} href={`/search?type=${category.id}`}>
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-bold">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

