import React from "react"
import ShopItem from "./ShopItem"
import { shopItemImages } from "../../../../utils/data"

const ShopSection = () => {
  return (
    <div className=" my-8 p-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 min-h-[30em]">
        <div className="md:col-span-1 p-4 flex justify-center items-center">
          <h2 className="text-4xl font-bold">SHOP</h2>
        </div>

        {shopItemImages.map((item, index) => (
          <ShopItem key={index} index={index} path={item.path} />
        ))}
      </div>
    </div>
  )
}

export default ShopSection
