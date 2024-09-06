import React from "react"
import HeroSection from "./components/hero/HeroSection"
import NewArrivalSection from "./components/carousel/NewArrivalSection"
import ShopSection from "./components/shop/ShopSection"
import ReviewSection from "./components/reviews/ReviewSection"
import VideoPlayerSection from "./components/videoplayer/VideoPlayerSection"
import SaleSection from "./components/sale/SaleSection"
import ProteinCalculator from "./components/proteincalc/ProteinCalculator"
import Journey from "./components/journey/Journey"

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <NewArrivalSection />
      <ProteinCalculator />
      <ShopSection />
      {/* <VideoPlayerSection /> */}
      <SaleSection />
      <Journey />
      <ReviewSection />
    </div>
  )
}

export default Home
