import React, { useState } from "react"
import Discount from "../../../../components/Discount"

type SaleItemProps = {
  name: string
  path: string
  initial_price: number
  final_price: number
  index: number
}

const SaleItem = ({
  name,
  path,
  initial_price,
  final_price,
  index,
}: SaleItemProps) => {
  const [isHovered, setHovered] = useState<number | null>(null)

  const handleClick = () => {
    console.log(`shop item clicked ${index}`)
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
        src={path}
        alt={`Product ${index}`}
        className="h-[35em] object-cover"
      />

      <button
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  border-2 border-white px-4 py-2 rounded-full transition duration-200 ease-in-out ${
          isHovered === index ? "bg-white text-primary" : "text-white"
        }`}
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
