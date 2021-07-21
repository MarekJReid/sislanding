import React from "react"
import { RegisterContainer, RegisterForm, Input, Button } from "./register.css"
import Testimonials from "../../Testimonial/Testimonial"

const Registar = () => {
  return (
    <RegisterContainer>
      <h1>Register now</h1>
      <h3>Fill out your details to register now!</h3>
      <RegisterForm>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
        <Button action="submit"> REGISTER</Button>
      </RegisterForm>
      <Testimonials />
    </RegisterContainer>
  )
}

export default Registar