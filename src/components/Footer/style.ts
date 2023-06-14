import styled from 'styled-components'

export const Container = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #dddddd;
  margin-top: 3rem;
  padding: 1.5rem 0 6rem;
  text-align: center;
  color: ${(props) => props.theme.secondaryColor};
`
export const Midia = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding-bottom: 0.5rem;

  a {
    display: flex;
    background-color: #eaeaea;
    color: ${(props) => props.theme.secondaryColor};
    padding: 0.5rem;
    border-radius: 6px;
    text-decoration: none;
    border: 1px solid #dddddd;

    transition: transform 0.3s ease-in-out;
    :hover {
      transform: scale(1.1);
      background-color: ${(props) => props.theme.hoverColor};
      color: ${(props) => props.theme.textLight};
    }
  }
`
