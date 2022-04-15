import styled from "styled-components";

export const Button = styled.input`
  margin: 20px 20px 20px 0;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  transition: all 350ms;
  &:hover {
    outline: none !important;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.accent};
  }
  @media only screen and (max-width: 300px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;