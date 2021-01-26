import styled from 'styled-components'
import db from '../db.json'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  // flip background
  // -webkit-transform: scaleX(-1);
  // transform: scaleX(-1);
  background-size: cover;
  background-position: center;
`

export default function Home() {
  return (
    <BackgroundImage>
      wakawakawka

    </BackgroundImage>
  )
}
