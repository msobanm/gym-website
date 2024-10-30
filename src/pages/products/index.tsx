import React, { useState } from "react"
import ProductList from "./components/ProductList"
import CategoryCol from "./components/CategoryCol"
import Breadcrumbs from "../../components/Breadcrumbs"
import { useGetAllProducts } from "../../utils/hooks/useGetAllProducts"
import Spinner from "../../components/Spinner"

const Products = () => {
  // const [selectedCategory, setSelectedCategory] = useState("All")
  // const { products, isPending } = useGetAllProducts()

  const [category, setCategory] = useState<string>("all")
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(50000)
  const [stock, setStock] = useState<boolean>(false)
  const [sort, setSort] = useState<string>("newest")

  // Call your query hook with the current filter state
  const { products, isPending } = useGetAllProducts({
    category,
    minPrice,
    maxPrice,
    stock,
    sort,
  })

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }

  return (
    <>
      <Breadcrumbs />
      <div className=" flex flex-col md:flex-row">
        <CategoryCol
          category={category}
          setCategory={setCategory}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          setStock={setStock}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />

        <div className="md:w-3/4 p-4">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4">
              {category === "All"
                ? "All Products"
                : `Products in ${category.toUpperCase()}`}
            </h2>
            <div className="flex min-w-fit">
              <label className="min-w-[70px] flex items-center align-center">
                Sort By:
              </label>
              <select
                value={sort}
                onChange={handleSortChange}
                className="w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none "
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="priceAsc">Price (Low to High)</option>
                <option value="priceDesc">Price (High to Low)</option>
              </select>
            </div>
          </div>
          {isPending ? (
            <div className="min-h-svh w-full flex justify-center items-center">
              <Spinner />
            </div>
          ) : (
            products && <ProductList products={products} />
          )}
        </div>
      </div>
    </>
  )
}

export default Products
