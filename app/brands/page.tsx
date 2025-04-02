import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const brands = [
  {
    id: "trek",
    name: "Trek",
    logo: "/placeholder.svg?height=100&width=100",
    description:
      "Trek Bicycle Corporation is a bicycle and cycling product manufacturer and distributor headquartered in Waterloo, Wisconsin.",
    founded: 1976,
    country: "United States",
    website: "trek.com",
  },
  {
    id: "specialized",
    name: "Specialized",
    logo: "/placeholder.svg?height=100&width=100",
    description:
      "Specialized Bicycle Components, Inc., commonly called Specialized, is an American company that designs, manufactures and markets bicycles, bicycle components and related products.",
    founded: 1974,
    country: "United States",
    website: "specialized.com",
  },
  {
    id: "giant",
    name: "Giant",
    logo: "/placeholder.svg?height=100&width=100",
    description:
      "Giant Manufacturing Co. Ltd. is a Taiwanese bicycle manufacturer that is recognized as the world's largest bicycle manufacturer.",
    founded: 1972,
    country: "Taiwan",
    website: "giant-bicycles.com",
  },
  {
    id: "cannondale",
    name: "Cannondale",
    logo: "/placeholder.svg?height=100&width=100",
    description:
      "Cannondale Bicycle Corporation is an American division of Canadian conglomerate Dorel Industries that supplies bicycles.",
    founded: 1971,
    country: "United States",
    website: "cannondale.com",
  },
  {
    id: "santa-cruz",
    name: "Santa Cruz",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Santa Cruz Bicycles is a manufacturer of high-end mountain bikes based in Santa Cruz, California.",
    founded: 1993,
    country: "United States",
    website: "santacruzbicycles.com",
  },
  {
    id: "canyon",
    name: "Canyon",
    logo: "/placeholder.svg?height=100&width=100",
    description:
      "Canyon Bicycles GmbH is a German manufacturer of road bikes, mountain bikes, hybrid bikes, triathlon bikes and e-bikes based in Koblenz, Germany.",
    founded: 2002,
    country: "Germany",
    website: "canyon.com",
  },
  {
    id: "bmc",
    name: "BMC",
    logo: "/placeholder.svg?height=100&width=100",
    description: "BMC Switzerland is a bicycle and cycling product manufacturer based in Grenchen, Switzerland.",
    founded: 1994,
    country: "Switzerland",
    website: "bmc-switzerland.com",
  },
  {
    id: "cervelo",
    name: "Cervélo",
    logo: "/placeholder.svg?height=100&width=100",
    description:
      "Cervélo Cycles is a Canadian manufacturer of racing and track bicycles. Cervélo uses CAD, computational fluid dynamics, and wind tunnel testing at a variety of facilities.",
    founded: 1995,
    country: "Canada",
    website: "cervelo.com",
  },
]

export default function BrandsPage() {
  return (
    <div className="container px-4 py-8 md:py-12 lg:py-16">
      <h1 className="text-3xl font-bold mb-8">Bicycle Brands</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <Link key={brand.id} href={`/brands/${brand.id}`}>
            <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center p-2">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{brand.name}</h3>
                    <p className="text-sm text-gray-500">
                      {brand.country}, est. {brand.founded}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 line-clamp-3">{brand.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

