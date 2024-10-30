import React from "react"
import ProductListItem from "./ProductListItem"
import { Product } from "../../../utils/types"

export type ProductListProps = {
  // category: string
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  // const filteredProducts =
  //   category === "All"
  //     ? products
  //     : products.filter((p) =>
  //         p.categories.some(
  //           (cat) => cat.toLowerCase() === category.toLowerCase()
  //         )
  //       )

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 max-[500px]:divide-y">
      {products.map((product) => (
        <ProductListItem key={product._id} {...product} />
      ))}
    </ul>
  )
}

export default ProductList
