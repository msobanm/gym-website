import React from "react"
import { FaStar, FaRegStar } from "react-icons/fa"
const reviews = [
  {
    id: 1,
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in felis vel augue cursus ullamcorper.",
    rating: 4,
  },
  {
    id: 2,
    author: "Jane Smith",
    content:
      "Sed blandit ultrices tortor, nec mattis ligula posuere id. Duis sit amet lacus vitae nunc gravida fermentum.",
    rating: 5,
  },
  {
    id: 3,
    author: "Soban Malik",
    content:
      "Sed blandit ultrices tortor, nec mattis ligula posuere id. Duis sit amet lacus vitae nunc gravida fermentum.",
    rating: 2,
  },
]

const ReviewSection: React.FC = () => {
  const renderStars = (rating: number): React.ReactNode => {
    const filledStars = Array.from({ length: rating }, (_, index) => (
      <FaStar key={index} className="text-yellow-500" />
    ))
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
      <FaRegStar key={index} className="text-yellow-500" />
    ))
    return [...filledStars, ...emptyStars]
  }

  return (
    <div className="container mx-auto my-8 p-10">
      <h2 className="text-4xl font-bold mb-6">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-md shadow-md">
            <div className="flex items-center mb-4">
              {renderStars(review.rating)}
            </div>
            <p className="text-gray-700 mb-4">{review.content}</p>
            <p className="text-gray-600 font-semibold">{review.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewSection
