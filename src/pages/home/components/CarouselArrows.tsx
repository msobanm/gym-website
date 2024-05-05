import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io"

type ArrowProps = {
  onClick?: () => void
}
export function NextArrow({ onClick }: ArrowProps) {
  return (
    <button className="absolute -right-10 top-1/3 z-10" onClick={onClick}>
      <IoIosArrowDroprightCircle size={40} />
    </button>
  )
}

export function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button className="absolute -left-10 top-1/3 z-10" onClick={onClick}>
      <IoIosArrowDropleftCircle size={40} />
    </button>
  )
}
