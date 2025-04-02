import Image from "next/image"
import Link from "next/link"

const brands = [
  { id: "trek", name: "Trek", logo: "/placeholder.svg?height=100&width=100" },
  { id: "specialized", name: "Specialized", logo: "/placeholder.svg?height=100&width=100" },
  { id: "giant", name: "Giant", logo: "/placeholder.svg?height=100&width=100" },
  { id: "cannondale", name: "Cannondale", logo: "/placeholder.svg?height=100&width=100" },
  { id: "santa-cruz", name: "Santa Cruz", logo: "/placeholder.svg?height=100&width=100" },
  { id: "canyon", name: "Canyon", logo: "/placeholder.svg?height=100&width=100" },
  { id: "bmc", name: "BMC", logo: "/placeholder.svg?height=100&width=100" },
  { id: "cervelo", name: "Cervélo", logo: "/placeholder.svg?height=100&width=100" },
]

export function BikeBrands() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-4xl">
      {brands.map((brand) => (
        <Link key={brand.id} href={`/brands/${brand.id}`} className="flex flex-col items-center group">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center p-4 mb-2 transition-all group-hover:shadow-md">
            <Image
              src={brand.logo || "/placeholder.svg"}
              alt={brand.name}
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-sm font-medium">{brand.name}</span>
        </Link>
      ))}
    </div>
  )
}

