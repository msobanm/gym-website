import React from "react"
import Button from "../../../components/Button"
import { ContactFormProps } from "../../../utils/types"

const ContactForm = ({ onSubmit, emailSent, children }: ContactFormProps) => {
  return (
    <div className="w-3/4 p-8 border rounded-md flex flex-col">
      <div>
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or inquiries, please fill out the form
          below, and we'll get back to you as soon as possible.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col md:flex-row gap-4 w-full"
      >
        <div className="flex flex-col gap-1 md:w-3/4">{children}</div>
        <div className="pt-5 flex flex-col gap-3 items-start">
          <Button title="Send Email" type="submit" />
          {emailSent && (
            <div className="text-secondary">Your email has been sent!</div>
          )}
        </div>
      </form>
    </div>
  )
}

export default ContactForm
