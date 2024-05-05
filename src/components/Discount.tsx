import React from "react"
import { discountCalculator } from "../utils/discountCalculator"

type DiscountProps = {
  initial_price: number
  final_price: number
}

const Discount = ({ initial_price, final_price }: DiscountProps) => {
  return (
    <div className="bg-lime-300 w-14 h-14 rounded-full flex justify-center items-center absolute right-5 top-5">
      {discountCalculator(initial_price, final_price)}%
    </div>
  )
}

export default Discount
