import React from "react"
import { ButtonProps } from "../utils/types"

const Button = ({ className, title, type, onClick }: ButtonProps) => {
  return (
    <button
      className={`bg-secondary text-white px-6 py-3 rounded hover:bg-secondary-2 focus:outline-none transition duration-200 ease-in-out shadow-md ${className}`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  )
}

export default Button
