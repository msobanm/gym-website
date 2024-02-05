import React, { useState } from "react"
import { ProductListItemProps } from "../../../utils/types"
import { useNavigate } from "react-router-dom"

const ProductListItem = ({ id, title, price, image }: ProductListItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <li
      className="mb-2 p-4 min-w-40 min-h-60 flex flex-col gap-2 items-center cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/products/${id}`)}
    >
      <div className="w-40 h-60 relative">
        <img src={image} className="w-full h-full object-contain " />
        <button
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-primary text-white px-4 p-2 w-3/4 h-10 transition-all duration-200 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={(event) => {
            event.stopPropagation()
            console.log("button clicked!")
          }}
        >
          Add to Cart
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm text-gray-500">Price: ${price}</p>
      </div>
    </li>
  )
}

export default ProductListItem
