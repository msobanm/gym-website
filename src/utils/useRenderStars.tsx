import { FaRegStar, FaStar } from "react-icons/fa"

export const useRenderStars = (rating: number): React.ReactNode => {
  const filledStars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <FaStar key={`filled_${index}`} className="text-yellow-500" />
  ))
  const emptyStars = Array.from(
    { length: 5 - Math.floor(rating) },
    (_, index) => (
      <FaRegStar key={`empty_${index}`} className="text-yellow-500" />
    )
  )
  return [...filledStars, ...emptyStars]
}
