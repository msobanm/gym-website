import React from "react"
import { TextAreaInputProps } from "../../utils/types"

const TextAreaInput = ({
  name,
  label,
  register,
  message,
}: TextAreaInputProps) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-bold">
        {label}
      </label>
      <textarea
        id={name}
        {...register}
        className="w-full border p-2 rounded-md focus:outline-none"
        rows={4}
      />
      {message && <p className="text-red-500 text-xs mt-1">{message}</p>}
    </div>
  )
}

export default TextAreaInput
