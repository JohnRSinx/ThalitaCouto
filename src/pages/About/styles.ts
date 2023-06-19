import styled from 'styled-components'

export const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.textDark};
`
export const Subtittle = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.textDark};
`
export const Container = styled.div`
  margin: 8rem 2rem 2rem 2rem;
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 768px) {
    margin: 1.5rem 2rem;
  }
`
export const Content = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  h3 {
    text-align: center;
    color: ${(props) => props.theme.textDark};
  }
  img {
    max-width: 650px;
    max-height: 650px;
    object-fit: contain;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: 480px) {
      max-width: 400px;
      max-height: 400px;
    }
  }
`
export const TextAbout = styled.p`
  text-align: justify;
  line-height: 1.6;
  opacity: 0.75;
  color: ${(props) => props.theme.textDark};
`
/// MyJourney

export const MyJourneyContainer = styled.div`
  margin-top: 5rem;
  text-align: center;
  h2 {
    color: ${(props) => props.theme.textDark};
  }
`
export const TimeLine = styled.div`
  display: flex;
  justify-content: center;
`
export const ContentTimeLine = styled.div`
  position: relative;
  margin: 2rem;
  padding-left: 2rem;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: ${(props) => props.theme.secondaryColor};
  }

  h3 {
    font-weight: 500;
    color: ${(props) => props.theme.textDark};
  }
  p,
  span {
    opacity: 0.75;
    color: ${(props) => props.theme.textDark};
  }
`
export const Circle = styled.div`
  position: absolute;
  left: -7px;
  top: 0;
  height: 1rem;
  width: 1rem;
  border: 1px solid #caaca4;
  border-radius: 50%;
  background-color: ${(props) => props.theme.secondaryColor};
  transition: 0.5s;
  :hover {
    background-color: ${(props) => props.theme.accentColor};
  }
`
