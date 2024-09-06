import React from "react"
import { useNavigate } from "react-router-dom"

const Journey = () => {
  const navigate = useNavigate()
  return (
    <div className="h-[30em]">
      <h1 className="text-4xl font-bold text-center mb-16">
        Your Personal Fitness Journey Starts Here
      </h1>
      <div className="flex justify-center relative">
        <div className="w-3/4 absolute">
          <img
            src="https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/09/Man-Preparing-Barbell-Lift-Chalk-Cloud.jpg?quality=86&strip=all"
            alt="gym guy"
            className="w-[45em]"
          />
        </div>
        <div className="w-[30em] absolute right-60 top-40">
          <p className="text-xl bg-white p-8">
            No matter where you are on your fitness journey, we have the right
            supplements to fuel your progress. From beginners to pros, we've got
            you covered with the best in the industry.
            <button
              className="bg-black px-5 py-2 text-white mt-5 hover:bg-gray-900 transition ease-in-out"
              onClick={() => navigate("/products")}
            >
              Explore
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Journey
