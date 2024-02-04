import React from "react"
import Button from "../Button"
import { AuthFormProps } from "../../utils/types"

const AuthForm = ({ title, onSubmit, children }: AuthFormProps) => {
  return (
    <div className="w-full h-svh flex justify-center items-center bg-primary">
      <div className="w-[23em] h-3/4 p-6 flex flex-col gap-5 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold">{title}</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          {children}
          <Button title={title} type="submit" />
        </form>
        <p className="text-gray-700 text-sm">
          {title === "Register"
            ? "Already have an account? "
            : "Don't have an account? "}
          <span className="text-secondary cursor-pointer">
            {" "}
            {title === "Register" ? "Login Here!" : "Register Here!"}
          </span>
        </p>
      </div>
    </div>
  )
}

export default AuthForm
