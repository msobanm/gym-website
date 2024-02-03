import React, { useState } from "react"
import { icons } from "../utils/icons"

const FollowSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-5">
      <h1>Follow Us</h1>
      <div className="flex gap-5">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`cursor-pointer ${
              hoveredIndex === index ? `text-3xl ${icon.hoverColor}` : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <icon.icon className="text-3xl transition duration-300 ease-in-out" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FollowSection
