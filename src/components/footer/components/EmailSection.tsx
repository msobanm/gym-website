import React from "react"
import { IoMdSend } from "react-icons/io"

const EmailSection: React.FC = () => {
  return (
    <div className="flex justify-center flex-1">
      <div className="flex flex-col gap-5 w-3/4 ">
        <h2 className="">Email us your thought, Directly into our inbox</h2>
        <div className="flex space-x-2 w-3/4">
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 w-full border border-white rounded focus:outline-none focus:border-secondary-2 text-primary"
          />
          <button className="bg-secondary-2 text-white px-4 py-2 rounded hover:bg-secondary focus:outline-none transition duration-300 ease-in-outtransition duration-100 ease-in-out">
            <IoMdSend />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmailSection
