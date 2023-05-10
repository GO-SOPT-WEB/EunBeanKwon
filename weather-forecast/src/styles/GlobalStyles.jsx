import { createGlobalStyle } from "styled-components";
 
const GlobalStyles = createGlobalStyle`
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        /* https://blog.jeongtae.com/rem-%EA%B3%A0%EC%B0%B0 */
        font-size: 62.5%;
        @media screen and (min-width: 0\0) {
        /* IE 9, IE 10, IE 11 */
        :root,
        html {
            font-size: 10px;
        }
        }
        @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        /* IE 10, IE 11 */
        :root,
        html {
            font-size: 10px;
        }
}
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #F6F9F0;
        margin-bottom: 100px;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;
 
export default GlobalStyles;