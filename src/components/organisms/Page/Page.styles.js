import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.grey};
  max-width: 100%;
  @media only screen and (max-width: 1340px) {
    grid-template-columns: 300px 1fr;
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: 250px 1fr
  }
  @media only screen and (max-width: 820px) {
    display: unset;
  }
`;
