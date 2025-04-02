import { Suspense } from "react"
import { SearchResults } from "@/components/search-results"
import { SearchFilters } from "@/components/search-filters"
import { SearchSkeleton } from "@/components/search-skeleton"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = typeof searchParams.q === "string" ? searchParams.q : ""
  const type = typeof searchParams.type === "string" ? searchParams.type : ""

  return (
    <div className="container px-4 py-8 md:py-12 lg:py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <SearchFilters initialType={type} />
        </aside>
        <main className="flex-1">
          <h1 className="text-2xl font-bold mb-6">
            {query ? `Search results for "${query}"` : "All Bicycles"}
            {type && query ? ` in ${type}` : type ? `${type} Bicycles` : ""}
          </h1>
          <Suspense fallback={<SearchSkeleton />}>
            <SearchResults query={query} type={type} />
          </Suspense>
        </main>
      </div>
    </div>
  )
}

