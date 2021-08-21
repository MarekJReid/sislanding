import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  InputForm,
  InputContainer,
  QuotedBoxRight,
  QuotedBoxLeft,
  InputLabel,
  Textarea,
  FooterFormbutton,
  FooterFormbuttonWrapper,
  FormIntroContainer,
  FormDescription
} from "./FooterForm.css"

import { DivHeavy, Subtitle, Title } from '../../styles/Typography.css'
import { Container } from "../../styles/ContainerStyles.css"

const FooterForm = () => {
  return (
    <Container>
      <Title>
        Need more <span style={{ color: "#FF1010" }}>assistance</span> or to
        talk to an expert?
      </Title>
      <FormIntroContainer>
        <StaticImage src="../../../static/footer-img.jpg" alt="form-image" />
        <FormDescription>
          <Subtitle>We understand</Subtitle>
          <DivHeavy>Help</DivHeavy>
          <p>
            Sometimes you just want to talk to someone who understands what all
            of this is information means and can explain it in a way you can
            understand.
          </p>
          <DivHeavy>Can’t find enough information?</DivHeavy>
          <p>
            If you have more questions or queries we have Education Advise
            experts waiting to answer any and all of your queries.
          </p>
        </FormDescription>
      </FormIntroContainer>
      <InputContainer>
        <QuotedBoxLeft>
          <InputLabel>Name</InputLabel>
          <InputForm />
          <InputLabel>Phone</InputLabel>
          <InputForm />
        </QuotedBoxLeft>
        <QuotedBoxRight>
          <InputLabel>Email</InputLabel>
          <InputForm />
        </QuotedBoxRight>
        <InputLabel>How can we help?</InputLabel>
        <Textarea />
        <FooterFormbuttonWrapper>
          <FooterFormbutton>REACH OUT</FooterFormbutton>
        </FooterFormbuttonWrapper>
      </InputContainer>
    </Container>
  )
}

export default FooterForm
