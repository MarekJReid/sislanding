import React from "react"
import {
  BusinessSkillSetcontainer,
  BusinessSkillSetWrapper,
  BusinessSkillImage,
  BusinessInfo,
  Image,
} from "./BusinessSkillSet.css"
import { Title } from "../../styles/Typography.css"
import bus from "../../images/bus.jpg"

const BusinessSkillSet = ({ title, subtitle }) => {
  return (
    <BusinessSkillSetWrapper>
      <Title weight={700} color="#707070">
        Find out what your education pathway could look like
      </Title>
      <BusinessSkillSetcontainer>
        <BusinessSkillImage>
          <Image src={bus} />
        </BusinessSkillImage>
        <BusinessInfo>
          <h4 dark>Business Qaulification Pathway</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </BusinessInfo>
      </BusinessSkillSetcontainer>
    </BusinessSkillSetWrapper>
  
  )
}

export default BusinessSkillSet