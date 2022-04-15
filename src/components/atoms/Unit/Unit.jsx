import React from 'react'
import { UnitElement, UnitName, UnitInfo, UnitDetails, UnitIndex, UnitInfoWrapper, UnitMaxPurchaseQuantity } from './Unit.styles'

const Unit = ({ unit, calculationData }) => {

  const calculatePossibleToBuyNumber = () => {
    const canBuy = []
    if (unit.cost.Wood) canBuy.push(calculationData.woodAmount / unit.cost.Wood)
    if (unit.cost.Food) canBuy.push(calculationData.foodAmount / unit.cost.Food)
    if (unit.cost.Stone) canBuy.push(calculationData.stoneAmount / unit.cost.Stone)
    if (unit.cost.Gold) canBuy.push(calculationData.goldAmount / unit.cost.Gold)
    console.log(canBuy)
    return canBuy.length ? Math.floor(Math.min(...canBuy)): 0
    }

    return (
      <UnitElement>
          <UnitIndex>{unit.id}</UnitIndex>
          <UnitInfoWrapper>
          <UnitName>{unit.name}</UnitName>
            <UnitDetails>
              <UnitInfo>Armor: {unit.armor}</UnitInfo>
              <UnitInfo>Attack: {unit.attack || 0}</UnitInfo>
            </UnitDetails>
            </UnitInfoWrapper>
        <UnitMaxPurchaseQuantity>{calculatePossibleToBuyNumber()}</UnitMaxPurchaseQuantity>
      </UnitElement>
    )
}

export default Unit