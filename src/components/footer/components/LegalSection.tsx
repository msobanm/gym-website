import React from "react"
import { legal } from "../utils/legal"

const LegalSection: React.FC = () => {
  return (
    <div className="flex justify-around flex-wrap gap-5 p-3 border-t">
      <p className="text-sm">
        © 2023 Your Company Lahore, Pakistan. All Rights Reserved
      </p>
      {legal.map((text, index) => (
        <p
          key={index}
          className="text-white text-sm text-center hover:text-secondary cursor-pointer"
        >
          {text.text}
        </p>
      ))}
    </div>
  )
}

export default LegalSection
