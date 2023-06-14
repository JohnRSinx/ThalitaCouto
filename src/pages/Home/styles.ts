import styled, { keyframes } from 'styled-components'

const fadeInAnimation = keyframes`
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
  `

export const Container = styled.div`
  margin: 8rem 0rem 8rem;
  display: flex;
  justify-content: center;
  gap: 5rem;

  @media screen and (max-width: 768px) {
    margin: 1rem 1rem 25rem 1rem;

    gap: 3rem;
  }
  @media screen and (max-width: 576px) {
    flex-direction: column;
    margin: 1rem 1rem 0rem 1rem;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    margin: 0.5rem;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media screen and (max-width: 992px) {
    column-gap: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
  @media screen and (max-width: 480px) {
    column-gap: 1rem;
    flex-direction: column;
    justify-content: center;
  }
`
export const Profile = styled.img`
  background-repeat: no-repeat;
  background-position: center;

  object-fit: contain;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.15);
  justify-self: center;
  max-width: 300px;
  max-height: 400px;
  animation: ${fadeInAnimation} 3.5s ease-in-out;

  @media screen and (max-width: 576px) {
    order: -1;
    max-width: 300px;
    max-height: 300px;
  }
  @media screen and (max-width: 360px) {
    max-width: 200px;
    max-height: 200px;
  }
`

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
  a {
    color: ${(props) => props.theme.secondaryColor};
    :hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }
  @media screen and (max-width: 480px) {
    flex-direction: row;
  }
`
