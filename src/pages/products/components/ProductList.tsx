import React from "react"
import { ProductListProps } from "../../../utils/types"
import { products } from "../../../utils/data"
import ProductItem from "./ProductItem"

const ProductList = ({ category }: ProductListProps) => {
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category.toLowerCase())

  return (
    <ul className="grid grid-cols-4 gap-5">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  )
}

export default ProductList
