import React from "react"
import { categories } from "../../../utils/data"
import { CategoryColProps } from "../../../utils/types"

const CategoryCol = ({
  selectedCategory,
  setSelectedCategory,
}: CategoryColProps) => {
  return (
    <div className="md:w-1/4 md:h-screen p-2 md:p-4 border-r">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <ul className="flex gap-4 md:flex-col md:gap-0 list-none">
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer mb-4 ${
              selectedCategory === category ? "font-bold text-secondary" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryCol
