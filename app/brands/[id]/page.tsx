import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

// Mock data - would normally come from a database or API
const brands = [
  {
    id: "trek",
    name: "Trek",
    logo: "/placeholder.svg?height=200&width=200",
    banner: "/placeholder.svg?height=400&width=1200",
    description:
      "Trek Bicycle Corporation is a bicycle and cycling product manufacturer and distributor headquartered in Waterloo, Wisconsin. The company has previously manufactured bikes under the Gary Fisher, LeMond Racing Cycles, Klein, and Villiger Bikes brand names. Trek bicycles are marketed through 1,700 dealers across North America, subsidiaries in Europe, Asia, South Africa, as well as distributors in 90 countries worldwide.",
    founded: 1976,
    country: "United States",
    website: "trek.com",
    headquarters: "Waterloo, Wisconsin, USA",
    specialties: ["Mountain bikes", "Road bikes", "City bikes", "Electric bikes"],
  },
  {
    id: "specialized",
    name: "Specialized",
    logo: "/placeholder.svg?height=200&width=200",
    banner: "/placeholder.svg?height=400&width=1200",
    description:
      "Specialized Bicycle Components, Inc., commonly called Specialized, is an American company that designs, manufactures and markets bicycles, bicycle components and related products. Founded in 1974 by Mike Sinyard, Specialized was one of the first companies to introduce a production mountain bike. Specialized introduced the first major production mountain bike in the world, the Stumpjumper, in 1981. The company continues to innovate across all cycling disciplines.",
    founded: 1974,
    country: "United States",
    website: "specialized.com",
    headquarters: "Morgan Hill, California, USA",
    specialties: ["Mountain bikes", "Road bikes", "Gravel bikes", "Electric bikes"],
  },
]

// Mock bike data for the brand
const bikesData = {
  trek: [
    {
      id: 1,
      name: "Trek Fuel EX 9.8",
      type: "Mountain",
      price: 5999.99,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 7,
      name: "Trek Domane AL 3",
      type: "Road",
      price: 1099.99,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 9,
      name: "Trek Checkpoint SL 5",
      type: "Gravel",
      price: 3299.99,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 10,
      name: "Trek Rail 9.8 XT",
      type: "Electric Mountain",
      price: 8799.99,
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
  specialized: [
    {
      id: 2,
      name: "Specialized Tarmac SL7",
      type: "Road",
      price: 7499.99,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 8,
      name: "Specialized Turbo Vado SL",
      type: "Electric",
      price: 3499.99,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 11,
      name: "Specialized Stumpjumper Evo",
      type: "Mountain",
      price: 4999.99,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 12,
      name: "Specialized Diverge Comp Carbon",
      type: "Gravel",
      price: 3999.99,
      image: "/placeholder.svg?height=300&width=400",
    },
  ],
}

export default function BrandPage({ params }: { params: { id: string } }) {
  const brand = brands.find((b) => b.id === params.id)

  if (!brand) {
    notFound()
  }

  const brandBikes = bikesData[params.id] || []

  return (
    <div className="container px-4 py-8 md:py-12 lg:py-16">
      <div className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden mb-8">
        <Image
          src={brand.banner || "/placeholder.svg"}
          alt={`${brand.name} banner`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold">{brand.name}</h1>
            <p className="text-white/80">
              Est. {brand.founded} • {brand.headquarters}
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">About {brand.name}</h2>
            <p className="text-gray-700">{brand.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">{brand.name} Bicycles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {brandBikes.map((bike) => (
                <Link key={bike.id} href={`/bikes/${bike.id}`}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                    <div className="relative h-48">
                      <Image src={bike.image || "/placeholder.svg"} alt={bike.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold truncate">{bike.name}</h3>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-gray-500">{bike.type}</span>
                        <span className="font-semibold">${bike.price.toLocaleString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center p-4">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Founded</span>
                  <span className="font-medium">{brand.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Country</span>
                  <span className="font-medium">{brand.country}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Headquarters</span>
                  <span className="font-medium">{brand.headquarters}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Website</span>
                  <a
                    href={`https://${brand.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    {brand.website}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {brand.specialties.map((specialty, index) => (
                    <div key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">View All {brand.name} Bikes</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

