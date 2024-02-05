import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import FormInput from "../../components/form/FormInput"
import { inputs } from "./utils/inputs"
import TextAreaInput from "../../components/form/TextAreaInput"
import ContactForm from "./components/ContactForm"

const ContactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email({ message: "Invalid email format" }).min(1),
  message: z.string().min(1),
})

type ContactFormInput = z.infer<typeof ContactFormSchema>

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(ContactFormSchema),
  })

  const [emailSent, setEmailSent] = useState(false)

  const onSubmit: SubmitHandler<ContactFormInput> = (data) => {
    console.log("Form data:", data)
    setEmailSent(true)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <ContactForm emailSent={emailSent} onSubmit={handleSubmit(onSubmit)}>
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
        <TextAreaInput
          name="message"
          label="Message"
          register={register("message")}
          message={errors?.message?.message}
        />
      </ContactForm>
    </div>
  )
}

export default Contact
