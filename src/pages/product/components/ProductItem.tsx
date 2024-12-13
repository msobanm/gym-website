import React, { useEffect, useState } from "react"
import { renderStars } from "../../../utils/renderStars"
import { ProductItemProps, Variant } from "../../../utils/types"
import { useLocation } from "react-router-dom"
import Select from "../../../components/Select"
import { FaShippingFast } from "react-icons/fa"
import { CgDanger } from "react-icons/cg"
import ReactHtmlParser from "react-html-parser"
import YouMayLikeSection from "../../../components/YouMayLikeSection"

const ProductItem = ({ quantity, setQuantity, onClick }: ProductItemProps) => {
  const { state } = useLocation()

  const { _id, title, desc, img, type, categories, variants, reviews } = state

  const [selectedFlavor, setSelectedFlavor] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [initialPrice, setInitialPrice] = useState(0)
  const [finalPrice, setfinalPrice] = useState(0)

  // Update available sizes and price based on selected flavor
  useEffect(() => {
    if (selectedFlavor) {
      const availableVariant = variants.find(
        (variant: Variant) => variant.flavor === selectedFlavor
      )
      setSelectedSize(availableVariant.size) // Default size selection
      setInitialPrice(availableVariant.initial_price) // Price of selected flavor and size
      setfinalPrice(availableVariant.final_price) // Price of selected flavor and size
    }
  }, [selectedFlavor])

  const handleFlavorChange = (flavor: string) => {
    setSelectedFlavor(flavor)
  }

  const handleSizeChange = (size: string) => {
    const selectedVariant = variants.find(
      (variant: Variant) =>
        variant.flavor === selectedFlavor && variant.size === size
    )
    if (selectedVariant) {
      setSelectedSize(size)
      setInitialPrice(selectedVariant.initial_price)
      setfinalPrice(selectedVariant.final_price)
    }
  }
  return (
    <div>
      <div className="flex flex-col md:p-8 lg:p-16 pb-24 min-h-[50em] md:min-h-[50em] md:flex-row">
        <div className="md:w-1/2 flex justify-center items-center p-5">
          <img src={img[0]} alt={title} className="h-full object-contain" />
        </div>
        <div className="md:w-1/2 bg-white p-6 rounded-md shadow-md m-5 md:m-0">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 mb-5 flex gap-2">
            Category:{" "}
            <span className="text-secondary">
              {categories[0].toUpperCase()}
            </span>
          </p>
          <p className="text-gray-700 mb-5 flex gap-2">
            Availability:{" "}
            <span className="text-secondary">{variants.stock}</span>
          </p>
          <div>
            <h3>Select Flavor:</h3>
            {variants.map((variant: Variant) => (
              <button
                key={variant.flavor}
                onClick={() => handleFlavorChange(variant.flavor)}
                className={selectedFlavor === variant.flavor ? "active" : ""}
              >
                {variant.flavor}
              </button>
            ))}
          </div>
          <div>
            <h3>Select Size:</h3>
            {variants
              .filter((variant: Variant) => variant.flavor === selectedFlavor)
              .map((variant: Variant) => (
                <button
                  key={variant.size}
                  onClick={() => handleSizeChange(variant.size)}
                  className={selectedSize === variant.size ? "active" : ""}
                >
                  {variant.size}
                </button>
              ))}
          </div>
          <p className="text-gray-700 text-xl font-semibold mb-5 flex gap-2">
            <span className="text-red-500 line-through">
              Rs. {initialPrice}
            </span>
            <span className="text-secondary">Rs. {finalPrice}</span>
          </p>
          {/* <div className="flex items-center">{renderStars(rating.rate)}</div>
          <p className="text-gray-500">{`${rating.rate} (${rating.count} reviews)`}</p> */}
          <div className="flex gap-4 items-center mt-6">
            <label className="text-gray-700">Quantity:</label>
            <Select quantity={quantity} setQuantity={setQuantity} />
          </div>
          <button className="my-5 w-full relative z-0 h-[50px] border-none outline-none text-white bg-[#111] cursor-pointer rounded-[10px] glow-on-hover">
            Add to Cart
          </button>

          <button
            className="w-full bg-white text-black border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white mt-5transition-shadow duration-300 ease-in-out hover:shadow-[inset_0_0_40px_40px_#000000]"
            onClick={onClick}
          >
            Buy Now
          </button>
          <div className="flex flex-col py-10 gap-5">
            <div className="flex gap-5 items-center">
              <FaShippingFast size={25} />
              <div>
                <h1 className="text-sm font-bold">Standard Shipping</h1>
                <p className="text-xs">
                  Cash on delivery across Pakistan at your doorstep
                  <br /> Estimated delivery in 3 to 5 working days.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <CgDanger size={25} />
              <div>
                <h1 className="text-sm font-bold">Warning</h1>
                <p className="text-xs">
                  Customers with the following claims issues will not be
                  entertained for exchange or return:
                  <br />- Allergic
                  <br />- Digestive
                  <br />- Gastric
                  <br />- Bloating
                  <br />- Headache
                  <br />- Constipation, etc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-serif border-b border-black">
          Description
        </h1>
        <div>{ReactHtmlParser(desc)}</div>
      </div>
      <YouMayLikeSection />
    </div>
  )
}

export default ProductItem
