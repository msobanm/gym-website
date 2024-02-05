import React from "react"
import { ReviewCardProps } from "../../../../utils/types"
import { useRenderStars } from "../../../../utils/useRenderStars"

const ReviewCard = ({ author, content, rating }: ReviewCardProps) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <div className="flex items-center mb-4">{useRenderStars(rating)}</div>
      <p className="text-gray-700 mb-4">{content}</p>
      <p className="text-gray-600 font-semibold">{author}</p>
    </div>
  )
}

export default ReviewCard
