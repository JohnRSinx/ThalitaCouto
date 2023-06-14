import { Container, Content } from './styles'

export function Courses() {
  return (
    <Container>
      <h1>Thalita Couto Academy</h1>
      <Content>
        <iframe
          src="https://www.youtube.com/embed/kE3g-Kd_jK0"
          title="Thalita Couto Academy - Curso básico ao avançado"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <p>
          Descubra o mundo fascinante do design de sobrancelhas com o nosso
          curso completo! Aprenda as técnicas essenciais para criar sobrancelhas
          perfeitas e transformá-las em verdadeiras obras de arte. Neste curso,
          você vai dominar desde os fundamentos básicos até as técnicas
          avançadas de design, correção de assimetrias, coloração e modelagem.
          Com a orientação especializada da renomada designer de sobrancelhas
          Thalita Couto, você irá aperfeiçoar suas habilidades e se destacar no
          mercado.
        </p>
      </Content>
    </Container>
  )
}
