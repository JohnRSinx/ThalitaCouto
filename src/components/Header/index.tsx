import {
  Briefcase,
  House,
  Moon,
  PlayCircle,
  SquaresFour,
  Sun,
  User,
  X,
} from 'phosphor-react'
import {
  Container,
  NavGrid,
  NavHome,
  Logo,
  Close,
  Links,
  Menu,
  ToggleMenu,
  SwitchTheme,
} from './styles'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
interface Theme {
  toggleTheme: () => void
  theme: boolean
}

export function Header({ toggleTheme, theme }: Theme) {
  const [togglleMenu, setTogglleMenu] = useState(true)
  const [activeNav, setActiveNav] = useState('home')

  function handleToggleMenu() {
    setTogglleMenu(!togglleMenu)
  }

  function handleActiveNavToggleMenu(data: string) {
    setActiveNav(data)
    setTogglleMenu(!togglleMenu)
  }

  return (
    <Container>
      <NavHome>
        <Logo>Thalita Couto</Logo>

        <Menu className={togglleMenu ? '' : 'showmenu'}>
          <NavGrid>
            <li>
              <NavLink to="/" title="home">
                <Links
                  href="#home"
                  onClick={() => handleActiveNavToggleMenu('home')}
                  className={activeNav === 'home' ? 'active' : ''}
                >
                  <span>
                    <House size={20} />
                  </span>
                  Home
                </Links>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" title="sobre mim">
                <Links
                  href="sobremim"
                  onClick={() => handleActiveNavToggleMenu('about')}
                  className={activeNav === 'about' ? 'active' : ''}
                >
                  <span>
                    <User size={20} />
                  </span>
                  Sobre mim
                </Links>
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" title="cursos">
                <Links
                  href="cursos"
                  onClick={() => handleActiveNavToggleMenu('courses')}
                  className={activeNav === 'courses' ? 'active' : ''}
                >
                  <span>
                    <PlayCircle size={20} />
                  </span>
                  Cursos
                </Links>
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" title="serviços">
                <Links
                  href="serviços"
                  onClick={() => handleActiveNavToggleMenu('services')}
                  className={activeNav === 'services' ? 'active' : ''}
                >
                  <span>
                    <Briefcase size={20} />
                  </span>
                  Serviços
                </Links>
              </NavLink>
            </li>
            <SwitchTheme onClick={() => toggleTheme()}>
              {theme ? <Sun size={18} /> : <Moon size={18} />}
            </SwitchTheme>
          </NavGrid>
          <Close onClick={() => handleToggleMenu()}>
            <X size={20} />
          </Close>
        </Menu>
        <ToggleMenu onClick={() => handleToggleMenu()}>
          <SquaresFour size={20} />
        </ToggleMenu>
      </NavHome>
    </Container>
  )
}
