import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items : center;
  flex-direction: column;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
`

export const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin-top: 58px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  width: 500px;
  max-width: 90%;
  @media only screen and (max-width: 900px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media only screen and (max-width: 500px) {
    font-size: 22px;
  }
`
export const UnitsWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  max-width: 95%;
`
