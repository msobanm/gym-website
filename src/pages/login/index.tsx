import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormInput from "../../components/form/FormInput"
import AuthForm from "../../components/form/AuthForm"
import { inputs } from "./utils/inputs"
import useSignIn from "react-auth-kit/hooks/useSignIn"
import { useNavigate } from "react-router-dom"
import { login } from "../../api/login"

const LoginFormSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
})

type LoginFormInput = z.infer<typeof LoginFormSchema>

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "kminchelle",
      password: "0lelplR",
    },
  })

  const signIn = useSignIn()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    const { token, authUserState } = await login<LoginFormInput>(data)
    signIn({
      auth: {
        token: token,
        type: "Bearer",
      },
      userState: authUserState,
    })
    navigate("/")
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
