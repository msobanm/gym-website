import React from "react"
import { discountCalculator } from "../utils/helpers"

type DiscountProps = {
  initial_price: number
  final_price: number
}

const Discount = ({ initial_price, final_price }: DiscountProps) => {
  return (
    <div className="border border-[2px] border-[#ff7e34] bg-transparent z-20 p-1 absolute right-5 top-5  flex justify-center items-center gap-2">
      <p className="z-20 mb-0 font-medium text-[#ff7e34]">
        {discountCalculator(initial_price, final_price)}% Off
      </p>
    </div>
  )
}

export default Discount
