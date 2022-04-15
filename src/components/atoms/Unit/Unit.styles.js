import styled from "styled-components";

export const UnitElement = styled.div`
  display: grid;
  grid-template-columns: 55px 1fr 65px;
  width: 400px;
  max-width: 95%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 10px;
  color:${({ theme }) => theme.colors.white};
  margin: 15px;
  @media only screen and (max-width: 400px) {
    grid-template-columns: 35px 1fr 50px;
  }
`
export const UnitIndex = styled.div`
color: ${({ theme }) => theme.colors.darkGrey};
background-color: ${({ theme }) => theme.colors.lightGrey};
font-size: ${({ theme }) => theme.fontSize.l};
font-weight: bold;
border-radius: 10px;
border: 1px solid ${({ theme }) => theme.colors.accent};display:flex;
align-items:center;
justify-content:center;
@media only screen and (max-width: 500px) {
  font-size: ${({ theme }) => theme.fontSize.m}
}
`
export const UnitInfoWrapper = styled.div`
  margin-left: 16px;
  @media only screen and (max-width: 300px) {
    margin-left: 8px;
  }
`

export const UnitName = styled.h3`
color: ${({ theme }) => theme.colors.accent};
margin: 10px 0;
@media only screen and (max-width: 500px) {
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 6px 0;
}
`

export const UnitDetails = styled.div`
  display:flex;
  margin-bottom: 10px;
`

export const UnitInfo = styled.div`
font-size: ${({ theme }) => theme.fontSize.s};
+ div{
  padding-left: 8px;
}
@media only screen and (max-width: 300px) {
  font-size: 13px;
}
`

export const UnitMaxPurchaseQuantity = styled.div`
  font-size: 24px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 300px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`