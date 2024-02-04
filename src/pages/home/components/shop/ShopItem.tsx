import React, { useState } from "react"
import { ShopItemProps } from "../../../../utils/types"

const ShopItem = ({ index, path }: ShopItemProps) => {
  const [isHovered, setHovered] = useState<number | null>(null)

  const handleClick = () => {
    console.log(`shop item clicked ${index}`)
  }

  return (
    <div
      className="relative h-full cursor-pointer"
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={handleClick}
    >
      <img
        src={path}
        alt={`Product ${index}`}
        className="w-full h-full object-cover rounded-md"
      />

      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  border-2 border-white text-white px-4 py-2 rounded-full transition duration-200 ease-in-out ${
          isHovered === index ? "bg-white text-black" : ""
        }`}
      >
        BUY NOW
      </div>
    </div>
  )
}

export default ShopItem
