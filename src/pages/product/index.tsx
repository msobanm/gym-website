import React, { useState } from "react"
import ProductItem from "./components/ProductItem"
import Breadcrumbs from "../../components/Breadcrumbs"

const Product = () => {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    // Implement the logic to add the product to the cart with the selected quantity
    console.log(`Added ${quantity} to the cart`)
  }

  return (
    <>
      <Breadcrumbs />
      <ProductItem
        quantity={quantity}
        setQuantity={setQuantity}
        onClick={handleAddToCart}
      />
    </>
  )
}

export default Product
