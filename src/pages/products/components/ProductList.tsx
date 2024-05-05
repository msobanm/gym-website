import React from "react"
import { ProductListProps } from "../../../utils/types"
import ProductListItem from "./ProductListItem"
import Spinner from "../../../components/Spinner"

const ProductList = ({
  category,
  products,
  isPending,
  isError,
  error,
}: ProductListProps) => {
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category.toLowerCase())

  if (isPending) {
    return (
      <div className="container flex items-center justify-center">
        <Spinner />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="container flex items-center justify-center">
        <span>Error: {error?.message}</span>
      </div>
    )
  }

  return (
    <ul className="grid grid-cols-4 gap-5">
      {filteredProducts.map((product) => (
        <ProductListItem key={product.id} {...product} />
      ))}
    </ul>
  )
}

export default ProductList
