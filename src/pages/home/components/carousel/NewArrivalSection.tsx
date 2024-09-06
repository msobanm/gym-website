import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { data, settings } from "../../../../utils/data"
import { getRandomObjects } from "../../../../utils/helpers"
import SaleItem from "../sale/SaleItem"

const NewArrivalSection = () => {
  const randomProducts = getRandomObjects(data, 8)

  return (
    <div className="lg:px-12 xl:px-20 py-12 relative">
      <h2 className="text-4xl text-center mb-12 font-bold">
        Hot Selling Products
      </h2>
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
  )
}

export default NewArrivalSection
