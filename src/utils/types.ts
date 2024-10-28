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
  primary?: boolean
}

export type CategoryColProps = {
  selectedCategory: string
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

export type ContactFormProps = {
  onSubmit: () => void
  emailSent: boolean
  children: React.ReactNode
}

export type FormInputProps = {
  label: string
  name: string
  type: string
  placeholder?: string
  register: UseFormRegisterReturn
  message: string | undefined
}

type Variant = {
  flavor: string
  size: string
  initial_price: number
  final_price: number
  sku: string
  stock: number
  _id: string
}

export type Product = {
  _id: string
  title: string
  desc: string
  img: string[]
  type: string
  categories: string[]
  variants: Variant[]
  reviews: any[]
}

export type ProductItemProps = {
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  onClick: () => void
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

export type TextAreaInputProps = {
  label: string
  name: string
  placeholder?: string
  register: UseFormRegisterReturn
  message: string | undefined
}
