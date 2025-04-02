import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, Share2, BarChart2 } from "lucide-react"
import { BikeReviews } from "@/components/bike-reviews"
import { SimilarBikes } from "@/components/similar-bikes"

// Mock data - would normally come from a database or API
const bikes = [
  {
    id: 1,
    name: "Trek Fuel EX 9.8",
    brand: "Trek",
    type: "Mountain",
    price: 5999.99,
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "The Fuel EX 9.8 is a high-performance carbon trail bike with FOX suspension, a SRAM GX Eagle drivetrain, and carbon wheels. It's a versatile trail bike for riders who want a single mountain bike that does it all.",
    specs: {
      material: "Carbon",
      wheelSize: '29"',
      suspension: "Full",
      gears: "12-speed",
      weight: "13.2 kg",
      brakes: "Hydraulic Disc",
      fork: "Fox 36 Factory",
      rearShock: "Fox Float Factory",
      drivetrain: "SRAM GX Eagle",
      tires: "Bontrager XR4 Team Issue",
    },
    featured: true,
  },
  {
    id: 2,
    name: "Specialized Tarmac SL7",
    brand: "Specialized",
    type: "Road",
    price: 7499.99,
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "The Tarmac SL7 is the ultimate race bike, featuring the perfect combination of aerodynamics, light weight, and ride quality. It's the fastest race bike on every road, delivering unprecedented performance.",
    specs: {
      material: "Carbon",
      wheelSize: "700c",
      suspension: "None",
      gears: "12-speed",
      weight: "6.8 kg",
      brakes: "Hydraulic Disc",
      fork: "Specialized FACT Carbon",
      rearShock: "N/A",
      drivetrain: "Shimano Dura-Ace Di2",
      tires: "S-Works Turbo",
    },
    featured: true,
  },
]

export default function BikePage({ params }: { params: { id: string } }) {
  const bike = bikes.find((b) => b.id.toString() === params.id)

  if (!bike) {
    notFound()
  }

  return (
    <div className="container px-4 py-8 md:py-12 lg:py-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image src={bike.image || "/placeholder.svg"} alt={bike.name} fill className="object-cover" priority />
            {bike.featured && (
              <Badge className="absolute top-4 right-4" variant="secondary">
                Featured
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {bike.gallery.map((img, i) => (
              <div key={i} className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${bike.name} view ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="text-sm font-medium text-gray-500">{bike.brand}</div>
            <h1 className="text-3xl font-bold">{bike.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline">{bike.type}</Badge>
              <Badge variant="outline">{bike.specs.material}</Badge>
              <Badge variant="outline">{bike.specs.wheelSize}</Badge>
            </div>
          </div>

          <div className="text-3xl font-bold">${bike.price.toLocaleString()}</div>

          <p className="text-gray-700">{bike.description}</p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="flex-1">
              Add to Cart
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
            <Button variant="outline" size="icon">
              <BarChart2 className="h-5 w-5" />
              <span className="sr-only">Compare</span>
            </Button>
          </div>

          <Tabs defaultValue="specs">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="geometry">Geometry</TabsTrigger>
              <TabsTrigger value="sizing">Sizing</TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div className="font-medium">Frame Material</div>
                <div>{bike.specs.material}</div>

                <div className="font-medium">Weight</div>
                <div>{bike.specs.weight}</div>

                <div className="font-medium">Wheel Size</div>
                <div>{bike.specs.wheelSize}</div>

                <div className="font-medium">Gears</div>
                <div>{bike.specs.gears}</div>

                <div className="font-medium">Suspension</div>
                <div>{bike.specs.suspension}</div>

                <div className="font-medium">Brakes</div>
                <div>{bike.specs.brakes}</div>

                <div className="font-medium">Fork</div>
                <div>{bike.specs.fork}</div>

                <div className="font-medium">Rear Shock</div>
                <div>{bike.specs.rearShock}</div>

                <div className="font-medium">Drivetrain</div>
                <div>{bike.specs.drivetrain}</div>

                <div className="font-medium">Tires</div>
                <div>{bike.specs.tires}</div>
              </div>
            </TabsContent>
            <TabsContent value="geometry" className="pt-4">
              <div className="aspect-video relative bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Geometry chart would be displayed here</p>
              </div>
            </TabsContent>
            <TabsContent value="sizing" className="pt-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Size</th>
                      <th className="text-left py-2">Rider Height</th>
                      <th className="text-left py-2">Standover</th>
                      <th className="text-left py-2">Reach</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">S</td>
                      <td className="py-2">5'0" - 5'5"</td>
                      <td className="py-2">730mm</td>
                      <td className="py-2">400mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">M</td>
                      <td className="py-2">5'5" - 5'9"</td>
                      <td className="py-2">750mm</td>
                      <td className="py-2">425mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">L</td>
                      <td className="py-2">5'9" - 6'1"</td>
                      <td className="py-2">770mm</td>
                      <td className="py-2">450mm</td>
                    </tr>
                    <tr>
                      <td className="py-2">XL</td>
                      <td className="py-2">6'1" - 6'5"</td>
                      <td className="py-2">790mm</td>
                      <td className="py-2">475mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <BikeReviews bikeId={bike.id} />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Similar Bikes</h2>
        <SimilarBikes currentBikeId={bike.id} bikeType={bike.type} />
      </div>
    </div>
  )
}

