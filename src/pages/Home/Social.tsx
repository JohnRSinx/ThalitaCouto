import { InstagramLogo, WhatsappLogo, YoutubeLogo } from 'phosphor-react'
import { ContainerSocial } from './styles'

export function Social() {
  return (
    <ContainerSocial>
      <a href="https://www.instagram.com/thalitacoutoo/">
        <InstagramLogo size={28} />
      </a>
      <a href="https://api.whatsapp.com/send/?phone=5579988529498&text&type=phone_number&app_absent=0">
        <WhatsappLogo size={28} />
      </a>
      <a href="https://www.youtube.com/watch?v=kE3g-Kd_jK0&t=4s">
        <YoutubeLogo size={28} />
      </a>
    </ContainerSocial>
  )
}
