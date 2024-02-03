import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { NextArrow, PrevArrow } from "./CarouselArrows"

const NewArrivalSection: React.FC = () => {
  const products = [
    { id: 1, name: "Product 1", image: "./img/slider/1.png" },
    { id: 2, name: "Product 2", image: "./img/slider/2.png" },
    { id: 3, name: "Product 3", image: "./img/slider/3.png" },
    { id: 4, name: "Product 4", image: "./img/slider/4.png" },
    { id: 5, name: "Product 5", image: "./img/slider/5.png" },
    { id: 6, name: "Product 6", image: "./img/slider/6.png" },
    { id: 7, name: "Product 7", image: "./img/slider/7.png" },
    { id: 8, name: "Product 8", image: "./img/slider/8.png" },
  ]

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
    <div className="container mx-auto my-8 px-5 relative">
      <h2 className="text-4xl font-bold text-center mb-6">New Arrivals</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md"
            />
            <p className="text-center mt-2">{product.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default NewArrivalSection
