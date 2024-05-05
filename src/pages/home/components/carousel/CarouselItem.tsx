import { CarouselItemProps } from "../../../../utils/types"

const CarouselItem = ({ name, image, onClick }: CarouselItemProps) => {
  return (
    <div className="px-8 md:px-1" onClick={onClick}>
      <img
        src={image}
        alt={name}
        className="w-full cursor-pointer h-[35em] object-cover max-[600px]:rounded-md"
      />
      <p className="text-center mt-2">{name}</p>
    </div>
  )
}

export default CarouselItem
