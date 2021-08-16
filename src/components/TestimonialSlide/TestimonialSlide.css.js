import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    display: none;
    opacity: 0;
  }

  to {
    display: inline;
    opacity: 1;
  }
`

export const TestimonialSlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  animation: ${rotate} 0.2s linear;
  opacity: ${props => (props.activeTab ? 1 : 0)};
  display: ${props => (props.activeTab ? "inline" : "none ")};
  transition: opacity 0.3s ease-out;
`

export const TestimonialSlideContainer = styled.div`
  display: grid;
  grid-template-columns: 33% 67%;
  justify-content: space-between;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }
`

const SliderArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 21px solid transparent;
  border-bottom: 21px solid transparent;
  display: inline-block;
`
export const SliderArrowLeft = styled(SliderArrow)`
  border-right: 42px solid #ff0000;
`

export const SliderArrowRight = styled(SliderArrow)`
  border-left: 42px solid #ff0000;
  margin-left: 20px;
`

export const TestimonialSlideInfo = styled.div`
  width: 80%;
  margin: auto;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
    grid-row: 1;
  }

  p {
    margin: 2rem 0;
  }
`

export const TestimonialSlideImage = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #707070;

  @media (max-width: 768px) {
    height: auto;
    border: none;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`
