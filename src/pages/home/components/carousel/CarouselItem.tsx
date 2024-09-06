type CarouselItemProps = {
  name: string
  image: string
  initial_price: number
  final_price: number
  onClick: () => void
}
const CarouselItem = ({ name, image, onClick }: CarouselItemProps) => {
  return (
    <div className="px-8 md:px-1" onClick={onClick}>
      <img
        src={image}
        alt={name}
        className="w-full cursor-pointer h-[25em] object-cover"
      />
      <p className="text-lg">{name}</p>
      <div className="flex gap-3 text-xl">
        <span className="line-through text-red-800">Rs.5500</span>
        <span>Rs.2500</span>
      </div>
    </div>
  )
}

export default CarouselItem
