import { CarouselDesign } from './CarouselDesign'
import { CarouselHenna } from './CarouselHenna'
import { CasouselMicro } from './CarouselMicro'

import { ContainerCarousel, Content, Container } from './styles'

export function Products() {
  return (
    <Container>
      <h1>Serviços</h1>
      <ContainerCarousel>
        <Content>
          <h3>Design</h3>
          <CarouselDesign />
        </Content>
        <Content>
          <h3>Design com Henna</h3>
          <CarouselHenna />
        </Content>
        <Content>
          <h3>Micropigmentação</h3>
          <CasouselMicro />
        </Content>
      </ContainerCarousel>
    </Container>
  )
}
