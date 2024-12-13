import React, { useEffect, useState } from "react"
import { totalPriceCalculator } from "../../../utils/helpers"
import Select from "../../../components/Select"
// import { Product } from "../../../utils/types"

type Product = {
  name: string
  quantity: number
  category: string
  color: string
  size: number
  price: number
}

type CartItemProps = {
  product: Product
}

const CartItem = ({ product }: CartItemProps) => {
  const [itemQuantity, setItemQuantity] = useState(product.quantity)

  return (
    <div className="flex flex-col gap-5 md:gap-0 md:flex-row p-5 justify-between">
      <div className="w-3/5 flex flex-col md:flex-row gap-10">
        <img
          src="https://nishatlinen.com/cdn/shop/files/42401115-_2.jpg?v=1706339234&width=600"
          className="md:h-40 object-cover rounded-md"
        />
        <div className="mt-5 flex flex-col gap-3">
          <p className="text-gray-500">{product.category}</p>
          <p className="text-lg font-medium -mt-3">{product.name}</p>
          <p className="text-gray-500">
            Color:
            {/* <span className="text-black">{color}</span> */}
          </p>
          <p className="text-gray-500">
            Size: <span className="text-black">{product.size}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 md:w-2/5 justify-between md:items-center">
        <h2 className="text-lg">Rs. {product.price.toLocaleString()}</h2>
        {/* <Select
          quantity={itemQuantity}
          setQuantity={setItemQuantity}
          onQuantityChange={handleQuantityChange}
        /> */}
        <h2 className="text-lg text-secondary">
          Rs. {totalPriceCalculator(product.price, itemQuantity)}
        </h2>
      </div>
    </div>
  )
}

export default CartItem
