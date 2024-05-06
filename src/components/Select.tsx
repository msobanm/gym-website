import React from "react"

type SelectProps = {
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
}
const Select = ({ quantity, setQuantity }: SelectProps) => {
  return (
    <select
      className="border border-gray-300 p-2 rounded-md max-w-12"
      value={quantity}
      onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
    >
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
    </select>
  )
}

export default Select
