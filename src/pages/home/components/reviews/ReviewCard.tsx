import React from "react"
import { FaStar, FaRegStar } from "react-icons/fa"
import { ReviewCardProps } from "../../../../utils/types"

const ReviewCard = ({ author, content, rating }: ReviewCardProps) => {
  const renderStars = (rating: number): React.ReactNode => {
    const filledStars = Array.from({ length: rating }, (_, index) => (
      <FaStar key={`filled_${index}`} className="text-yellow-500" />
    ))
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
      <FaRegStar key={`empty_${index}`} className="text-yellow-500" />
    ))
    return [...filledStars, ...emptyStars]
  }
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <div className="flex items-center mb-4">{renderStars(rating)}</div>
      <p className="text-gray-700 mb-4">{content}</p>
      <p className="text-gray-600 font-semibold">{author}</p>
    </div>
  )
}

export default ReviewCard
