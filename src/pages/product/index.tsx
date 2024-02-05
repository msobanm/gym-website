import React, { useState } from "react"
import ProductItem from "./components/ProductItem"
import Breadcrumbs from "../../components/Breadcrumbs"

const Product = () => {
  const product = {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  }

  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    // Implement the logic to add the product to the cart with the selected quantity
    console.log(`Added ${quantity} ${product.title} to the cart`)
  }

  return (
    <>
      <Breadcrumbs />
      <ProductItem
        {...product}
        quantity={quantity}
        setQuantity={setQuantity}
        onClick={handleAddToCart}
      />
    </>
  )
}

export default Product
