import { InstagramLogo, WhatsappLogo, YoutubeLogo } from 'phosphor-react'
import { Container, Midia } from './style'

export function Footer() {
  return (
    <Container>
      <h1>Couto</h1>
      <Midia>
        <a href="https://www.instagram.com/thalitacoutoo/">
          <InstagramLogo size={22} />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=5579988529498&text&type=phone_number&app_absent=0">
          <WhatsappLogo size={22} />
        </a>
        <a href="https://www.youtube.com/watch?v=kE3g-Kd_jK0&t=4s">
          <YoutubeLogo size={22} />
        </a>
      </Midia>
      <div>
        <p>&copy; 2023 Thalita Couto. Todos os direitos reservados.</p>
      </div>
    </Container>
  )
}
