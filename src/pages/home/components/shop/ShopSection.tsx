import React, { useState } from "react"

const ShopSection = () => {
  const images = [
    { path: "/img/shop/1.jpg" },
    { path: "/img/shop/2.jpg" },
    { path: "/img/shop/3.jpg" },
  ]

  const [isHovered, setHovered] = useState<number | null>(null)

  return (
    <div className=" my-8 p-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 min-h-[30em]">
        <div className="md:col-span-1 p-4 flex justify-center items-center">
          <h2 className="text-4xl font-bold">SHOP</h2>
        </div>

        {images.map((item, index) => (
          <div
            key={index}
            className="relative h-full cursor-pointer"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={item.path}
              alt={`Product ${index}`}
              className="w-full h-full object-cover rounded-md"
            />

            <button
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  border-2 border-white text-white px-4 py-2 rounded-full transition duration-200 ease-in-out ${
                isHovered === index ? "bg-white text-inherit" : ""
              }`}
            >
              BUY NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShopSection
