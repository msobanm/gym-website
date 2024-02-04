import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormInput from "../../components/form/FormInput"
import AuthForm from "../../components/form/AuthForm"
import { inputs } from "./utils/inputs"

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
      {inputs.map((item) => (
        <FormInput
          key={item.name}
          label={item.label}
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
          register={register(item?.name)}
          message={errors?.[item.name]?.message}
        />
      ))}
    </AuthForm>
  )
}

export default Login
