import { Social } from './Social'
import { Container, Content, Profile } from './styles'
import myprofileimg from '../../assets/DSC_0089.jpg'
import { Data } from './Data'
export function Home() {
  return (
    <Container>
      <Content>
        <Social />
        <Data />
      </Content>
      <Profile src={myprofileimg} alt="foto-minha" />
    </Container>
  )
}
