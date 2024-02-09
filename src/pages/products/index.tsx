import React, { useState } from "react"
import ProductList from "./components/ProductList"
import CategoryCol from "./components/CategoryCol"
import Breadcrumbs from "../../components/Breadcrumbs"
import { useQuery } from "@tanstack/react-query"
import { ApiService } from "../../services/ApiService"
import { API } from "../../common/apiEndPoints"

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const getAllProducts = async () => {
    try {
      const response = await ApiService.get(API.products.get, {
        signal: 15000,
        useAuthorization: false,
        headers: {},
      })
      const { data } = response
      return data
    } catch (err) {
      console.error(err)
    }
  }

  const {
    data: products,
    isPending,
    error,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  })

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
