import React from "react"
import { ButtonProps } from "../utils/types"

const Button = ({ className, title, type, onClick, primary }: ButtonProps) => {
  return (
    <button
      className={`${
        primary
          ? "bg-primary-2 hover:bg-primary"
          : " bg-secondary hover:bg-secondary-2"
      } text-white px-6 py-3 rounded focus:outline-none transition duration-200 ease-in-out shadow-md ${className}`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  )
}

export default Button
