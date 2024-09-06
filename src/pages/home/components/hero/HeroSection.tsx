import React from "react"
import Button from "../../../../components/Button"
import { useNavigate } from "react-router-dom"

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-contain bg-center  flex xl:items-center text-white">
      {/* <div className="p-5 py-20 text-left">
        <h1 className="text-4xl text-white drop-shadow-md md:text-6xl font-bold mb-4">
          Your GOTO Store!
        </h1>
        <p className="text-lg text-white drop-shadow-md md:text-xl mb-6">
          You can buy your clothes here :)
        </p>
        <Button title="SHOP NOW" onClick={() => navigate("/products")} />
      </div> */}
      <img src="/img/background.jpg" alt="hero" className="w-full" />
    </div>
  )
}

export default HeroSection
