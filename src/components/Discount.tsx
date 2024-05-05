import React from "react"
import { discountCalculator } from "../utils/helpers"

type DiscountProps = {
  initial_price: number
  final_price: number
}

const Discount = ({ initial_price, final_price }: DiscountProps) => {
  return (
    <div className="bg-[#ff8eb9] shadow-lg w-12 h-12 absolute right-5 top-5  flex flex-col justify-center items-center before:bg-[#ff8eb9] before:content-[''] before:absolute before:h-12 before:w-12 before:rotate-[30deg] after:bg-[#ff8eb9] after:content-[''] after:absolute after:h-12 after:w-12 after:rotate-[-30deg]">
      <p className="z-10 font-medium">
        {discountCalculator(initial_price, final_price)}%
      </p>
      <p className="text-xs z-10">OFF</p>
    </div>
  )
}

export default Discount
