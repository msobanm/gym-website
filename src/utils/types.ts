import { UseFormRegisterReturn } from "react-hook-form"

export type AuthFormProps = {
  title: string
  onSubmit: () => void
  children: React.ReactNode
}

export type ButtonProps = {
  className?: string
  title: string | React.ReactNode
  type?: "submit" | "reset" | "button" | undefined
  onClick?: () => void
}

export type CarouselItemProps = {
  name: string
  image: string
  onClick: () => void
}

export type FormInputProps = {
  label: string
  name: string
  type: string
  placeholder?: string
  register: UseFormRegisterReturn
  message: string | undefined
}

export type ReviewCardProps = {
  author: string
  content: string
  rating: number
}

export type ShopItemProps = {
  path: string
  index: number
}
