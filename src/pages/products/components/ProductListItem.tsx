import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Product } from "../../../utils/types"
import Discount from "../../../components/Discount"

const ProductListItem = ({
  _id,
  title,
  desc,
  img,
  type,
  categories,
  variants,
  reviews,
}: Product) => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <li
      className="mb-2 p-12 md:p-4 min-w-40 min-h-60 flex flex-col items-center cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() =>
        navigate(`/products/${title}`, {
          state: {
            _id,
            title,
            desc,
            img,
            type,
            categories,
            variants,
            reviews,
          },
        })
      }
    >
      <Discount
        initial_price={variants[0].initial_price}
        final_price={variants[0].final_price}
      />
      <div className="w-4/5 md:w-40 md:h-60 relative">
        <img src={img[0]} className="w-full h-full object-contain" />
        <button
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-primary text-white px-4 p-2 w-3/4 h-10 transition-all duration-200 ease-in-out ${
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
      <div className="flex flex-col">
        <h1 className="font-normal text-base mb-[1px]">{title}</h1>
        <div className="flex gap-2">
          <p className="line-through text-red-500  font-semibold">
            Rs. {variants[0].initial_price.toLocaleString()}
          </p>
          <p className=" font-semibold">
            Rs. {variants[0].final_price.toLocaleString()}
          </p>
        </div>
      </div>
    </li>
  )
}

export default ProductListItem
