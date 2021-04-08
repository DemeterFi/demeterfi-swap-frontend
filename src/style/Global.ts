import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    
    &:before{
      content: "";
      background-color: ${({ theme }) => theme.colors.background};
      background-image: url('/images/egg/dmtrbg.png');
      background-size: cover;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
