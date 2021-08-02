import styled from "styled-components"

export const CareerSkillSketWrapper = styled.div`
  margin: 4rem 2rem;
  max-width: 99vw;

  h2 {
    text-align: center;
    margin-bottom: 60px;
  }

`
export const CareerSkillSketcontainer = styled.div`
  display: flex;
  padding: 0 81px;
  justify-content: center
`
export const CareerInfo = styled.div`

padding-left: 30px;
 max-width: 420px;

h4 {
  margin-bottom : 13px;
  color : ${props => (props.title=='dark') ? "#153E35" : "#707070"};
  font-weight :  ${props => (props.title=='dark') ? 400 : 600};
  font-size: 30px;
  letter-spacing : 0.8px;

  &:first-child {
    margin-top : ${props => (props.title=='dark') ? "auto" : "43px"};
  }
  &:not(:first-child) {
    border-bottom: solid 3px ;
    padding-bottom: 5px;
  }
}
p {
  line-height : 25px;
}
p.dark {
 
  color : #153E35;
  font-weight: 500
}
`

export const Image = styled.img`
  max-width:100%;
`
export const CareerSkillImage = styled.div`
  width: 50%;
`
