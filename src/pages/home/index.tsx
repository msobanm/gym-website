import React from "react"
import HeroSection from "./components/hero/HeroSection"
import NewArrivalSection from "./components/carousel/NewArrivalSection"
import ShopSection from "./components/shop/ShopSection"
import ReviewSection from "./components/reviews/ReviewSection"
import VideoPlayerSection from "./components/videoplayer/VideoPlayerSection"
import SaleSection from "./components/sale/SaleSection"

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <NewArrivalSection />
      <ShopSection />
      {/* <VideoPlayerSection /> */}
      <SaleSection />
      <ReviewSection />
    </div>
  )
}

export default Home
