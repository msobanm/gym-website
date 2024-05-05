import useAuthUser from "react-auth-kit/hooks/useAuthUser"
import { CiUser, CiShoppingCart } from "react-icons/ci"
import { FaCaretDown } from "react-icons/fa"
import Dropdown from "./Dropdown"
import { useState } from "react"

type UserData = {
  firstName: string
  lastName: string
}

export default function Icons() {
  const auth = useAuthUser<UserData>()
  const [isOpen, setIsOpen] = useState(false)

  function getNameLetters() {
    if (auth) {
      const firstNameLetter = auth?.firstName?.charAt(0)
      const secondNameLetter = auth?.lastName?.charAt(0)
      const nameLetters = firstNameLetter + secondNameLetter

      return nameLetters
    }
  }

  function handleOnClick(name: string) {
    if (name === "user") {
      setIsOpen(!isOpen)
    }
  }
  const nameLetters = getNameLetters()

  const icons = [
    { name: "user", icon: (auth && FaCaretDown) || CiUser },
    { name: "cart", icon: CiShoppingCart },
  ]
  return (
    <div className="flex gap-5 justify-self-end relative">
      {icons.map((icon) => (
        <div
          key={icon.name}
          onClick={() => handleOnClick(icon.name)}
          className={`w-30 h-10 select-none flex justify-center items-center hover:bg-secondary hover:text-white cursor-pointer p-2 rounded-full transition duration-200 ease-in-out ${
            icon.name === "user"
              ? isOpen
                ? "bg-secondary text-white"
                : "bg-white"
              : ""
          }`}
        >
          {icon.name === "user" ? auth && nameLetters : ""}
          <icon.icon className="h-6 w-6" />
        </div>
      ))}
      <Dropdown isOpen={isOpen} />
    </div>
  )
}
