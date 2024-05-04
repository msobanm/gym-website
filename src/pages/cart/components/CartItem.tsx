import React, { useState } from "react"
import { totalPriceCalculator } from "../../../utils/helpers"
import Select from "../../../components/Select"

const CartItem = () => {
  const [quantity, setQuantity] = useState(1)
  return (
    <div className="flex p-5 justify-between">
      <div className="w-3/5 flex gap-10">
        <img
          src="https://nishatlinen.com/cdn/shop/files/42401115-_2.jpg?v=1706339234&width=600"
          className="h-40 object-cover rounded-md"
        />
        <div className="mt-5 flex flex-col gap-3">
          <p className="text-gray-500">WOMEN</p>
          <p className="text-lg font-medium -mt-3">
            2 Piece - Embroidered Suit
          </p>
          <p className="text-gray-500">
            Color: <span className="text-black">Black</span>
          </p>
          <p className="text-gray-500">
            Size: <span className="text-black">42</span>
          </p>
        </div>
      </div>
      <div className="flex w-2/5 justify-between items-center">
        <h2 className="text-lg font-bold">Rs. 9,000</h2>
        <Select quantity={quantity} setQuantity={setQuantity} />
        <h2 className="text-lg text-secondary font-bold">
          Rs. {totalPriceCalculator(9000, quantity)}
        </h2>
      </div>
    </div>
  )
}

export default CartItem
