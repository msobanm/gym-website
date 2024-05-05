import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { NextArrow, PrevArrow } from "./CarouselArrows"
import CarouselItem from "./CarouselItem"
import { arrivals } from "../../../../utils/data"

const NewArrivalSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <div className="container mx-auto my-8 px-5 pt-5 relative">
      <h2 className="text-4xl font-bold text-center mb-6">New Arrivals</h2>
      <Slider {...settings}>
        {arrivals.map((item) => (
          <CarouselItem key={item.id} name={item.name} image={item.image} />
        ))}
      </Slider>
    </div>
  )
}

export default NewArrivalSection
