import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import GmarketSansBold from './assets/fonts/GmarketSansBold.ttf';
import GmarketSansMedium from './assets/fonts/GmarketSansMedium.ttf';
import GmarketSansLight from './assets/fonts/GmarketSansLight.ttf';
import CardGame from './pages/CardGame';
import theme from './styles/theme';

const App = () => {
    return (
        <>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <CardGame />
                </ThemeProvider>
            </RecoilRoot>
        </>
    );
};

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
      font-family: 'GmarketSansMedium';
      src: url(${GmarketSansMedium}) format('ttf');
      font-weight: normal;
      font-style: normal; 
  }

  @font-face {
      font-family: 'GmarketSansBold';
      src: url(${GmarketSansBold}) format('ttf');
      font-weight: normal;
      font-style: normal; 
  }

  @font-face {
      font-family: 'GmarketSansLight';
      src: url(${GmarketSansLight}) format('ttf');
      font-weight: normal;
      font-style: normal; 
  }

  body, html {
    font-family: 'GmarketSansMedium';
    font-size: 16px;
  }

  button {
    all:unset;
    :hover {
        cursor: pointer;
  }
}
`;

export default App;
