import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { NextArrow, PrevArrow } from "./CarouselArrows"
import CarouselItem from "./CarouselItem"
import { arrivals } from "../../../../utils/data"

const NewArrivalSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="lg:px-12 xl:px-20 py-12 relative">
      <h2 className="text-4xl text-center mb-12 font-serif">New Arrivals</h2>
      <Slider {...settings}>
        {arrivals.map((item) => (
          <CarouselItem
            key={item.id}
            name={item.name}
            image={item.image}
            onClick={() =>
              console.log(`Carousel Item number ${item.id} clicked!`)
            }
          />
        ))}
      </Slider>
    </div>
  )
}

export default NewArrivalSection
