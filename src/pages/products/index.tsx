import React, { useState } from "react"
import ProductList from "./components/ProductList"
import CategoryCol from "./components/CategoryCol"
import Breadcrumbs from "../../components/Breadcrumbs"
import { products } from "../../utils/data"

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <>
      <Breadcrumbs />
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
          <ProductList category={selectedCategory} products={products} />
        </div>
      </div>
    </>
  )
}

export default Products
