import styled from "styled-components";

export const Form = styled.form `
  background-color: ${({ theme }) => theme.colors.darkGrey};
  z-index: 1;
  padding: 40px 30px;
  label,
  input {
    @media only screen and (max-width: 300px) {
      font-size: ${({ theme }) => theme.fontSize.s};
      max-width: 100%;
    }
  }
  box-shadow: 4px 4px 24px 0px ${({ theme }) => theme.colors.accent};
`;
export const Header = styled.h1 `
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  @media only screen and (max-width: 900px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media only screen and (max-width: 300px) {
    font-size: 22px;
  }
`
export const InputsWrapper = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    justify-content: space-around;
  }
  @media only screen and (max-width: 550px) {
    justify-content: center;
  }
`
export const InputWrapper = styled.div `
  display: flex;
  flex-direction: column;
  `;