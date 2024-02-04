import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormInput from "../../components/form/FormInput"
import AuthForm from "../../components/form/AuthForm"
import { inputs } from "./utils/inputs"

const RegisterFormSchema = z
  .object({
    fullName: z.string(),
    email: z.string().email({ message: "Invalid email format" }).min(1),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword
    },
    {
      message: "Passwords must match!",
      path: ["confirmPassword"],
    }
  )

type RegisterFormInput = z.infer<typeof RegisterFormSchema>

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>({
    resolver: zodResolver(RegisterFormSchema),
  })

  const onSubmit: SubmitHandler<RegisterFormInput> = (data) => {
    console.log(data)
  }

  return (
    <AuthForm title="Register" onSubmit={handleSubmit(onSubmit)}>
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

export default Register
