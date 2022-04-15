import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import { Wrapper } from "./Root.styles";
import Page from "../components/organisms/Page/Page";

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Page />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
