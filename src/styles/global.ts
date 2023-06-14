import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
html {
  scroll-behavior: smooth;
}
body {
  background-color: ${(props) => props.theme.backgroundLight};
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
}
body ,button , input , textarea {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 400;
}
h1{ 
  font-size: 2.25rem;
  font-weight: 600;
}
h2 {
  font-size: 1.5rem;
  font-weight: 600;
}
h3 {
  font-size: 1.25rem;
  font-weight: 600;
}
ul {
  list-style: none;
}
a {
  text-decoration:none; 
  
}
button {
  cursor: pointer;
  border: none;
  outline: none;
}
img {
  max-width: 100%;
  height: auto;
}

@media screen and (max-width:992px) {
  margin: 0 1.5rem 0 1.5rem;
  
}
@media screen and (max-width:768px){
  
}
@media screen and (max-width:576px){
  
}
@media screen and (max-width:350px){
  
}
`
