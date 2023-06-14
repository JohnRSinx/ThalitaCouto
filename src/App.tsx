import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/themes/darktheme'
import { Header } from './components/Header'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Footer } from './components/Footer'
import { defaultTheme } from './styles/themes/default'
import { useState } from 'react'

export function App() {
  // buttonToggleThem
  const [theme, setTheme] = useState(true)
  function toggleTheme() {
    setTheme(!theme)
  }

  return (
    <ThemeProvider theme={theme ? defaultTheme : darkTheme}>
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Router />
      </BrowserRouter>
      <Footer />

      <GlobalStyle />
    </ThemeProvider>
  )
}
