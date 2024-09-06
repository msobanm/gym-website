import React from "react"

const ProteinCalculator = () => {
  return (
    <div className="h-90 flex flex-col justify-center items-center md:flex-row bg-gray-200">
      <div className="h-full w-full md:w-1/2 relative flex">
        <img
          className="h-full w-full object-cover"
          src="/img/takingprotein.jpg"
          alt="protein"
        />
        <h1 className="absolute p-5 inset-0 flex justify-center items-center text-white text-4xl font-extrabold">
          Dont know how much protein to take?
        </h1>
      </div>
      <div className="h-full w-full md:w-1/2 text-4xl font-extrabold p-5">
        Just take your weight in kilograms an multiply it by 0.8
      </div>
    </div>
  )
}

export default ProteinCalculator
