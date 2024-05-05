import { CarouselItemProps } from "../../../../utils/types"

const CarouselItem = ({ name, image }: CarouselItemProps) => {
  return (
    <div className="px-2">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-md"
      />
      <p className="text-center mt-2">{name}</p>
    </div>
  )
}

export default CarouselItem
