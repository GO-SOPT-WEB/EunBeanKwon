import Header from './components/header';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'


const GlobalStyle = createGlobalStyle`
    ${reset}
`;

const App = () => {

  return (
    <>
    <GlobalStyle />
    <Header />
    </>
  )
}

export default App
