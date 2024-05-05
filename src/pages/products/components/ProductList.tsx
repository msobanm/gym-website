import React from "react"
import { ProductListProps } from "../../../utils/types"
import ProductListItem from "./ProductListItem"

const ProductList = ({ category, products }: ProductListProps) => {
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category.toLowerCase())

  return (
    <ul className="grid grid-cols-4 gap-5">
      {filteredProducts.map((product) => (
        <ProductListItem key={product.id} {...product} />
      ))}
    </ul>
  )
}

export default ProductList
