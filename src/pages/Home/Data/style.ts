import styled, { keyframes } from 'styled-components'

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
  }
`

export const ContainerData = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: ${(props) => props.theme.secondaryColor};
    font-size: 3.25rem;
    @media screen and (max-width: 992px) {
      font-size: 2.75rem;
    }
    @media screen and (max-width: 576px) {
      font-size: 2.25rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }

  h3 {
    color: ${(props) => props.theme.textDark};
    padding-bottom: 0.5rem;
    padding-left: 2.5rem;
    opacity: 0.8;
    @media screen and (max-width: 992px) {
      font-size: 1rem;
      padding: 0;
    }
  }

  p {
    text-align: center;
    color: ${(props) => props.theme.textDark};
    opacity: 0.7;
    max-width: 400px;
    margin-bottom: 3rem;
    @media screen and (max-width: 576px) {
      margin-bottom: 1.5rem;
    }
  }
`

export const ContactMe = styled.a`
  background-color: ${(props) => props.theme.secondaryColor};
  color: #fff;
  border: 1px solid #dddddd;

  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  animation: ${pulseAnimation} 2s infinite;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`
