import React, { useState } from "react"
import ProductList from "./components/ProductList"
import CategoryCol from "./components/CategoryCol"
import Breadcrumbs from "../../components/Breadcrumbs"
import { useGetAllProducts } from "../../utils/hooks/useGetAllProducts"
import Spinner from "../../components/Spinner"

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const { products, isPending } = useGetAllProducts()

  console.log("page rendered!")
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
          {isPending ? (
            <div className="h-full w-full flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            products && (
              <ProductList category={selectedCategory} products={products} />
            )
          )}
        </div>
      </div>
    </>
  )
}

export default Products
