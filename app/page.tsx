import Link from "next/link"
import { SearchForm } from "@/components/search-form"
import { FeaturedBikes } from "@/components/featured-bikes"
import { BikeCategories } from "@/components/bike-categories"
import { BikeBrands } from "@/components/bike-brands"
import BikeComparison from '@/components/BikeComparison'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Find Your Perfect Bicycle
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Search and compare bikes from all major brands and manufacturers in one place.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/search">
                <Button>Search Bikes</Button>
              </Link>
              <Link href="/compare">
                <Button variant="outline">Compare Bikes</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

