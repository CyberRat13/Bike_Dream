import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

// Mock data - would normally come from a database or API
const reviews = [
  {
    id: 1,
    bikeId: 1,
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    title: "Best mountain bike I've ever owned",
    content:
      "I've been riding this bike for 6 months now and it's been amazing on all types of terrain. The suspension is incredibly responsive and the handling is precise. Climbing is efficient and descending is confidence-inspiring.",
    date: "2023-12-15",
  },
  {
    id: 2,
    bikeId: 1,
    user: {
      name: "Sam Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 4,
    title: "Great bike with minor issues",
    content:
      "Overall this is an excellent trail bike. The carbon frame is stiff yet comfortable for long rides. My only complaint is that the stock tires aren't the best for wet conditions, but that's an easy upgrade.",
    date: "2023-11-03",
  },
  {
    id: 3,
    bikeId: 2,
    user: {
      name: "Jamie Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 5,
    title: "Lightning fast road bike",
    content:
      "This bike is incredibly fast and responsive. The electronic shifting is flawless and the carbon frame absorbs road vibrations while remaining stiff for sprinting. Worth every penny for serious road cyclists.",
    date: "2024-01-20",
  },
  {
    id: 4,
    bikeId: 2,
    user: {
      name: "Taylor Reed",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    rating: 4,
    title: "Professional quality with a few compromises",
    content:
      "This is essentially a pro-level bike with a few component compromises to bring the price down. The frame is identical to what the pros ride, and the handling is superb. Upgrades to the wheelset would make it perfect.",
    date: "2023-10-12",
  },
]

export function BikeReviews({ bikeId }: { bikeId: number }) {
  const bikeReviews = reviews.filter((review) => review.bikeId === bikeId)

  if (bikeReviews.length === 0) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <p className="text-gray-500">No reviews yet for this bike</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {bikeReviews.map((review) => (
        <div key={review.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={review.user.avatar} alt={review.user.name} />
                <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{review.user.name}</div>
                <div className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold">{review.title}</h4>
            <p className="text-gray-700 mt-1">{review.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

