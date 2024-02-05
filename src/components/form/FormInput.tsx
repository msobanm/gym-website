import React from "react"
import { FormInputProps } from "../../utils/types"

const FormInput = ({
  label,
  name,
  type,
  placeholder,
  message,
  register,
}: FormInputProps) => (
  <div className="formInput">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={name}
    >
      {label}
    </label>
    <input
      className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
      type={type}
      placeholder={placeholder}
      {...register}
    />
    {message && <p className="text-red-500 text-xs mt-1">{message}</p>}
  </div>
)

export default FormInput
