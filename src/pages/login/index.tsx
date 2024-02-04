import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormInput from "../../components/form/FormInput"
import AuthForm from "../../components/form/AuthForm"

const LoginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }).min(1),
  password: z.string().min(8),
})

type LoginFormInput = z.infer<typeof LoginFormSchema>

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver: zodResolver(LoginFormSchema),
  })

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
    console.log(data)
  }

  return (
    <AuthForm title="Login" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        register={{ ...register("email") }}
        message={errors?.email?.message}
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        register={{ ...register("password") }}
        message={errors?.password?.message}
      />
    </AuthForm>
  )
}

export default Login
