import styled from "styled-components";

export const InputField = styled.input`
    margin: 8px 0 25px 0;
    padding: 6px 10px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    width: 160px;
    max-width: 100%;
    font-family: "Montserrat", sans-serif;
    font-size: ${({ theme }) => theme.fontSize.m};
    color:${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkGrey};
    cursor: pointer;
    :focus, :hover {
      outline: none !important;
      border: 1px solid ${({ theme }) => theme.colors.accent}
    }
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    @media only screen and (max-width: 1340px) {
      width: 100%;
    }
    @media only screen and (max-width: 300px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
`