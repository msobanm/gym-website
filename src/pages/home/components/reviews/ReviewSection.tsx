import React from "react"
import { reviews } from "../../../../utils/data"
import ReviewCard from "./ReviewCard"

const ReviewSection = () => {
  return (
    <div className="container mx-auto my-8 p-10">
      <h2 className="text-4xl font-serif mb-6">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            author={review.author}
            content={review.content}
            rating={review.rating}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewSection
