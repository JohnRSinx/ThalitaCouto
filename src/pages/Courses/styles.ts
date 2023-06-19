import styled from 'styled-components'

export const Container = styled.div`
  margin: 8rem 2rem;
  text-align: center;
  h1 {
    color: ${(props) => props.theme.textDark};
  }
  @media screen and (max-width: 768px) {
    margin: 1.5rem 1rem 5rem 1rem;

    gap: 3rem;
  }
`
export const Content = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  iframe {
    border: none;
    width: 600px;
    height: 400px;

    @media screen and (max-width: 768px) {
      width: 500px;
      height: 350px;
    }
    @media screen and (max-width: 480px) {
      width: 350px;
      height: 350px;
    }
    @media screen and (max-width: 375px) {
      width: 300px;
      height: 300px;
    }
  }

  p {
    color: ${(props) => props.theme.textDark};
    opacity: 0.75;
    text-align: justify;
    margin: 1rem;
    max-width: 600px;
  }
`
