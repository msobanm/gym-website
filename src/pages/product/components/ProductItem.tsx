import React from "react"
import { renderStars } from "../../../utils/renderStars"
import { ProductItemProps } from "../../../utils/types"
import { useLocation } from "react-router-dom"
import Select from "../../../components/Select"

const ProductItem = ({ quantity, setQuantity, onClick }: ProductItemProps) => {
  const { state } = useLocation()

  const { title, image, description, price, category, rating } = state

  return (
    <div className="flex p-16 pb-24 h-[50em]">
      <div className="w-1/2 h-3/4 flex justify-center items-center p-5">
        <div className="h-[30em] w-[20em]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="w-1/2 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500 mb-10">{description}</p>
        <p className="text-gray-700 mb-5 flex gap-2">
          Price:<span className="text-secondary">${price}</span>
        </p>
        <p className="text-gray-700 mb-5 flex gap-2">
          Category:{" "}
          <span className="text-secondary">{category.toUpperCase()}</span>
        </p>
        <div className="flex items-center">{renderStars(rating.rate)}</div>
        <p className="text-gray-500">{`${rating.rate} (${rating.count} reviews)`}</p>
        <div className="flex gap-4 items-center mt-6">
          <label className="text-gray-700">Quantity:</label>
          <Select quantity={quantity} setQuantity={setQuantity} />
          <button
            className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-80"
            onClick={onClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
