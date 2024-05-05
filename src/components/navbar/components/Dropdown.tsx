import React from "react"

type Dropdown = {
  isOpen: boolean
}

const Dropdown = ({ isOpen }: Dropdown) => {
  return (
    <ul
      className={`bg-white p-[5px] flex shadow-inner absolute top-[2.8em] left-2 rounded ${
        isOpen ? "" : "hidden"
      }`}
    >
      <li className="m-0 hover:bg-secondary hover:text-white px-5 py-2 rounded cursor-pointer transition duration-100 ease-in-out">
        Logout
      </li>
    </ul>
  )
}

export default Dropdown
