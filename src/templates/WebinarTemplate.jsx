import React from "react"
import {TitleBanner, TitleBGImage, CourseHeading, MainContainer } from "./WebinarTemplate.css"
import bannerImg from "../images/bannerBg.jpeg"
import Registar from "../components/Forms/Register/Register"
import WebinarInfo from "../components/WebinarInfo/WebinarInfo"
import CareerSkillSket from "../components/CareerSkillSket/CareerSkillSket"

const WebinarTemplate = () => {
  return (
    <>
      <TitleBanner>
        <TitleBGImage src={bannerImg} alt="" />
        <CourseHeading>
          <h1>FNS40217 Certificate IV in Accounting and Bookkeeping</h1>
        </CourseHeading>
      </TitleBanner>
      <MainContainer>
        <WebinarInfo></WebinarInfo>
        <Registar />
        <CareerSkillSket subtitle="dark" title="How you can further your career with this course" />
      </MainContainer>
      
    </>
  )
}

export default WebinarTemplate