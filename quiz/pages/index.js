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
const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px;
  background-color: #FFF;
  color: #000;
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  aling-items: center;
  padding: 18px 32px;
  background-color: ${({theme}) => theme.colors.primary};
  * {
    margin: 0;
  }
`

Widget.Content = styled.div`
  padding: 24px 32px 32px 24px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`

export default function Home() {
  return (
    <BackgroundImage>
        <QuizContainer>
          <Widget>
            <Widget.Header>
                <h1>Lil Peep</h1>
            </Widget.Header>
            <Widget.Content>
              
              <p>lorem imp askjdhkb o  poaspsh  idhf fdsijo  </p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
            <h1>Lil Peep</h1>
            <p>lorem imp askjdhkb o  po sjd jashd </p>
            </Widget.Content>
          </Widget>
        </QuizContainer>
    </BackgroundImage>
  )
}
