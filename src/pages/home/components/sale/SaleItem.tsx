import React, { useState } from "react"
import Discount from "../../../../components/Discount"
import { useNavigate } from "react-router-dom"

type SaleItemProps = {
  id: number
  name: string
  image: string
  description: string
  initial_price: number
  final_price: number
  index: number
  category: string
  rating: number
}

const SaleItem = ({
  id,
  name,
  image,
  description,
  initial_price,
  final_price,
  index,
  category,
  rating,
}: SaleItemProps) => {
  const [isHovered, setHovered] = useState<number | null>(null)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${name}`, {
      state: {
        id,
        title: name,
        final_price,
        image,
        description,
        category,
        rating,
      },
    })
  }
  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={handleClick}
    >
      <Discount initial_price={initial_price} final_price={final_price} />
      <img
        src={image}
        alt={`Product ${index}`}
        className="h-[35em] object-cover max-[600px]:rounded-md"
      />

      <button
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-11 w-28 flex justify-center items-center border-2 border-white rounded-full transition duration-200 ease-in-out ${
          isHovered === index ? "bg-white text-primary" : "text-white"
        }`}
        onClick={(e) => {
          e.stopPropagation()
          console.log(`added ${name} to cart!`)
        }}
      >
        Add to cart
      </button>
      <div className="flex flex-col mt-4">
        <p className="text-sm">{name}</p>
        <div className="flex mt-2 gap-4">
          <p className="line-through text-red-500 text-lg">
            Rs. {initial_price.toLocaleString()}
          </p>
          <p className="text-lg">Rs. {final_price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

export default SaleItem
