import React from "react"
import { categories } from "../../../utils/data"

export type CategoryColProps = {
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
  setMinPrice: React.Dispatch<React.SetStateAction<number>>
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>
  setStock: React.Dispatch<React.SetStateAction<boolean>>
  minPrice: number
  maxPrice: number
}

const CategoryCol = ({
  category,
  setCategory,
  setMinPrice,
  setMaxPrice,
  setStock,
  minPrice,
  maxPrice,
}: CategoryColProps) => {
  const handleCategoryChange = (value: string) => {
    setCategory(value)
  }

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "min" | "max"
  ) => {
    if (type === "min") {
      setMinPrice(Number(e.target.value))
    } else {
      setMaxPrice(Number(e.target.value))
    }
  }

  const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStock(e.target.checked)
  }

  return (
    <div className="md:w-1/4 md:h-screen p-2 md:p-12 flex flex-col gap-5 border-r">
      <div className="flex flex-col gap-3 bg-gray-50 p-4 border border-gray-200 rounded">
        <div className="w-full text-xl border-b-2">Category</div>
        <div className="min-h-fit text-base text-gray-900 flex flex-col gap-3">
          {categories.map((item) => (
            <button
              className={`text-base w-fit px-3 ${
                category === item.toLowerCase() && "text-red-500"
              }`}
              key={item}
              onClick={() => handleCategoryChange(item.toLowerCase())}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 bg-gray-50 p-4 border border-gray-200 rounded">
        <div className="flex w-full">
          <label className="min-w-fit p-2">Min Price:</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-400 rounded ml-[5px]"
            value={minPrice}
            onChange={(e) => handlePriceChange(e, "min")}
          />
        </div>
        <div className="flex w-full">
          <label className="min-w-fit p-2">Max Price:</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-400 rounded"
            value={maxPrice}
            onChange={(e) => handlePriceChange(e, "max")}
          />
        </div>
      </div>

      <div className="flex items-center ps-4 bg-gray-50 border border-gray-200 rounded">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          onChange={handleStockChange}
        />
        <label className="w-full py-4 ms-2 text-base font-medium text-gray-900 ">
          In Stock
        </label>
      </div>
    </div>
  )
}

export default CategoryCol
