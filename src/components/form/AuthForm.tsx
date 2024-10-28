import React from "react"
import Button from "../Button"
import { AuthFormProps } from "../../utils/types"
import { Link } from "react-router-dom"

const AuthForm = ({ title, onSubmit, children }: AuthFormProps) => {
  return (
    <div className="w-full h-svh flex justify-center items-center bg-secondary">
      <div className="w-[23em] min-h-3/4 p-6 flex flex-col gap-5 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold">{title}</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          {children}
          <Button primary title={title} type="submit" />
        </form>
        <p className="text-gray-700 text-sm">
          {title === "Register"
            ? "Already have an account? "
            : "Don't have an account? "}
          <Link
            to={title === "Register" ? "/login" : "/register"}
            className="text-primary cursor-pointer"
          >
            {" "}
            {title === "Register" ? "Login Here!" : "Register Here!"}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm
