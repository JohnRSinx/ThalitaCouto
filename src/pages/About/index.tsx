import { Container, Content, Subtittle, TextAbout, Title } from './styles'
import myprofileimg from '../../assets/DSC_0089.jpg'
import { Myjourney } from './Myjourney'

export function About() {
  return (
    <Container>
      <Title>My intro</Title>
      <Subtittle>Sobre mim</Subtittle>
      <Content>
        <img src={myprofileimg} alt="foto-minha" />
        <div>
          <h3>Olá! Sou Thalita </h3>
          <TextAbout>
            tenho 25 anos e sou casada. Há 5 anos, entrei na área da beleza e me
            tornei uma especialista em sobrancelhas. Minha jornada começou
            quando entrei na faculdade aos 17 anos, inicialmente cursando
            arquitetura. No terceiro período, decidi fazer uma mudança e
            transferi meu curso para estética e cosmética. Foi nessa época que
            tive meu primeiro contato com a área da beleza. A faculdade de
            estética abrangia diversas áreas, como capilar, facial e corporal.
            No entanto, foi com a área facial, em especial a limpeza de pele,
            maquiagem e sobrancelhas, que me identifiquei profundamente. Na
            faculdade, tive a oportunidade de explorar esses temas e me
            apaixonei. Decidi então buscar cursos adicionais fora da faculdade
            para aprimorar minhas habilidades, e dedicava meu tempo aos estudos.
            Desde a adolescência, sempre tive uma grande vontade de trabalhar,
            mas enfrentei dificuldades em encontrar oportunidades. Finalmente,
            aos 18 anos, consegui meu primeiro emprego com carteira assinada.
            Trabalhei por um ano e, quando surgiu a oportunidade de ser demitida
            recebendo meus direitos trabalhistas, decidi agarrar essa chance.
            Utilizei o dinheiro para investir no meu primeiro curso de
            micropigmentação em Minas Gerais e, em seguida, abri meu próprio
            estúdio! Trabalhar por conta própria foi a melhor escolha que eu
            poderia ter feito. Sou completamente apaixonada pela minha profissão
            e pelo trabalho que realizo. Amo o que faço e não trocaria essa
            experiência por nada!
          </TextAbout>
        </div>
      </Content>
      <Myjourney />
    </Container>
  )
}
