import React, { useState } from "react"
import ProductList from "./components/ProductList"
import CategoryCol from "./components/CategoryCol"
import Breadcrumbs from "../../components/Breadcrumbs"
import { useGetAllProducts } from "../../utils/hooks/useGetAllProducts"

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const { products, isPending, isError, error } = useGetAllProducts()

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
          {products && (
            <ProductList
              category={selectedCategory}
              products={products}
              isPending={isPending}
              isError={isError}
              error={error}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Products
