import { CarouselItemProps } from "../../../../utils/types"

const CarouselItem = ({ name, image, onClick }: CarouselItemProps) => {
  return (
    <div className="px-4" onClick={onClick}>
      <img
        src={image}
        alt={name}
        className="w-full cursor-pointer h-[30em] object-cover"
      />
      <p className="text-center mt-2">{name}</p>
    </div>
  )
}

export default CarouselItem
