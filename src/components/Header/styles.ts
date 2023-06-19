import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.accentColor};

  @media screen and (max-width: 768px) {
    top: initial;
    bottom: 0;
  }
`
export const Logo = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.textDark};
`
export const NavHome = styled.nav`
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;

  @media screen and (max-width: 992px) {
    margin: 0 1.5rem 0 1.5rem;
  }

  @media screen and (max-width: 768px) {
    .showmenu {
      bottom: 0;
    }
  }
  @media screen and (max-width: 350px) {
    margin: 0 0.875rem 0 0.875rem;
  }
`
export const Menu = styled.div`
  @media screen and (max-width: 768px) {
    background-color: ${(props) => props.theme.accentColor};
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 24px 24px 0 0;
    transition: 0.3s;
  }
  @media screen and (max-width: 350px) {
    padding: 2rem 0.25rem 4rem;
  }
`

export const NavGrid = styled.ul`
  display: flex;
  gap: 1.5rem;
  .active {
    color: ${(props) => props.theme.hoverColor};
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`
export const Links = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  color: ${(props) => props.theme.primaryColor};
  :hover {
    color: ${(props) => props.theme.hoverColor};
    transition: 0.2s;
  }

  @media screen and (max-width: 768px) {
    font-weight: 600;
  }
  svg {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`

export const Close = styled.button`
  display: none;
  background: none;
  color: black;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1.3rem;
    bottom: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${(props) => props.theme.textDark};
    :hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }
`
export const ToggleMenu = styled.button`
  display: none;
  background: none;
  color: ${(props) => props.theme.textDark};
  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 350px) {
    cursor: pointer;
  }
`
export const SwitchTheme = styled.button`
  display: flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0.25rem;
  background: transparent;
  :hover {
    color: ${(props) => props.theme.hoverColor};
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 10rem;
  }
`
