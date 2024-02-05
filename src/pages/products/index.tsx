import React, { useState } from "react"
import ProductList from "./components/ProductList"
import CategoryCol from "./components/CategoryCol"

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <div className="flex">
      <CategoryCol
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">
          {selectedCategory === "All"
            ? "All Products"
            : `Products in ${selectedCategory}`}
        </h2>
        <ProductList category={selectedCategory} />
      </div>
    </div>
  )
}

export default Products
