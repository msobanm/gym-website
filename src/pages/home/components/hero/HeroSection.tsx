import React from "react"
import Button from "../../../../components/Button"

const HeroSection = () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center text-white bg-[url('/img/background_.jpg')]">
      <div className="container mx-auto text-left">
        <h1 className="text-4xl text-white md:text-6xl font-bold mb-4">
          Your GOTO Store!
        </h1>
        <p className="text-lg text-white md:text-xl mb-6">
          You can buy your clothes here :)
        </p>
        <Button
          title="SHOP NOW"
          onClick={() => console.log("Shop Now clicked!")}
        />
      </div>
    </div>
  )
}

export default HeroSection
