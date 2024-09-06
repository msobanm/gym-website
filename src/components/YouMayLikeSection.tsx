import React from "react"
import { data, settings } from "../utils/data"
import SaleItem from "../pages/home/components/sale/SaleItem"
import { getRandomObjects } from "../utils/helpers"
import Slider from "react-slick"

const YouMayLikeSection = () => {
  const randomProducts = getRandomObjects(data, 8)
  return (
    <div className="p-5 mt-5">
      <h1 className="text-center text-3xl font-bold">You May Also Like:</h1>
      <div className="p-20">
        <Slider {...settings}>
          {randomProducts.map((item) => (
            <SaleItem
              key={item.id}
              id={item.id}
              index={item.id}
              name={item.name}
              image={item.image}
              facts={item.facts}
              description={item.description}
              initial_price={item.initial_price}
              final_price={item.final_price}
              category={item.category}
              rating={item.rating}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default YouMayLikeSection
