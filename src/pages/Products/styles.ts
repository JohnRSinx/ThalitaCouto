import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 8rem;
  text-align: center;
  @media screen and (max-width: 1080px) {
    margin-top: 8rem;
  }
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }

  h1 {
    color: ${(props) => props.theme.textDark};
  }
`
export const ContainerCarousel = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 3rem;
  justify-content: center;
  @media screen and (max-width: 1080px) {
    gap: 1rem;
    grid-template-columns: 270px 270px 270px;
  }
  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
  }
`
export const Content = styled.div`
  text-align: center;
  h3 {
    color: ${(props) => props.theme.textDark};
  }

  @media screen and (max-width: 1080px) {
    h3 {
      margin-bottom: -5rem;
    }
  }
  @media screen and (max-width: 360) {
    h3 {
      margin-bottom: 1rem;
    }
  }

  img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    @media screen and (max-width: 1080px) {
      width: 80%;
      max-height: 80%;
      margin-top: 3rem;
    }
    @media screen and (max-width: 780px) {
      width: 65%;
      max-height: 90%;
      margin-top: 5rem;
    }
  }
`
