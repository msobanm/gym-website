import React, { useState } from "react"
import Discount from "../../../../components/Discount"
import { useNavigate } from "react-router-dom"

type SaleItemProps = {
  id: number
  name: string
  image: string
  facts: string
  description: string
  initial_price: number
  final_price: number
  index: number
  category: string
  rating: { rate: number; count: number }
}

const SaleItem = ({
  id,
  name,
  image,
  facts,
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
        initial_price,
        image,
        description,
        category,
        rating,
      },
    })
  }
  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      <Discount initial_price={initial_price} final_price={final_price} />
      <div
        className="relative h-[20em]"
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
      >
        <img
          src={image}
          alt={`Product ${index}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ease-in-out ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={facts}
          alt={`Product ${index}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* <button
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-11 w-28 flex justify-center items-center border-2 border-white rounded-full transition duration-200 ease-in-out ${
          isHovered === index ? "bg-white text-primary" : "text-white"
        }`}
        onClick={(e) => {
          e.stopPropagation()
          console.log(`added ${name} to cart!`)
        }}
      >
        Add to cart
      </button> */}
      <div className="flex flex-col mt-4">
        <p>{name}</p>
        <div className="flex gap-4">
          <p className="line-through text-red-500 text-lg font-semibold">
            Rs. {initial_price.toLocaleString()}
          </p>
          <p className="text-lg font-semibold">
            Rs. {final_price.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SaleItem
