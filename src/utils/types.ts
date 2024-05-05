export type ButtonProps = {
  className?: string
  title: string | React.ReactNode
  onClick: () => void
}

export type CarouselItemProps = {
  name: string
  image: string
}

export type ReviewCardProps = {
  author: string
  content: string
  rating: number
}
