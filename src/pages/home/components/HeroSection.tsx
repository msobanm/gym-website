import React from "react"

const HeroSection: React.FC = () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center text-white bg-[url('/img/background_.jpg')]">
      <div className="container mx-auto text-left">
        <h1 className="text-4xl text-white md:text-6xl font-bold mb-4">
          Your GOTO Store!
        </h1>
        <p className="text-lg text-white md:text-xl mb-6">
          You can buy your clothes here :)
        </p>
        <button className="bg-secondary text-white px-6 py-3 rounded hover:bg-secondary-2 focus:outline-none transition duration-200 ease-in-out shadow-md">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default HeroSection
