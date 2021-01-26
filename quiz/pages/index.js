import styled from 'styled-components'
import db from '../db.json'

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  // flip background
  // -webkit-transform: scaleX(-1);
  // transform: scaleX(-1);
  background-size: cover;
  background-position: center;
`
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media sreen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <BackgroundImage>
        <QuizContainer>
          waka waka e e 
        </QuizContainer>
    </BackgroundImage>
  )
}
