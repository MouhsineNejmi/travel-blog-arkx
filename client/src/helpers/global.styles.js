import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all .2s;
  }

  a {
    text-decoration: none;
  }
`

export const Container = styled.div`
  margin: 0 200px;
`;

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 50px;
`
