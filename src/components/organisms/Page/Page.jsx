import React, { useState } from 'react'
import { Wrapper } from './Page.styles'
import Result from '../../molecules/Result/Result'
import ResourcesManager from '../../molecules/ResourcesManager/ResourcesManager'

const Page = () => {
  const [calculationData, setCalculationData] = useState({woodAmount: 0, foodAmount: 0, stoneAmount: 0, goldAmount: 0});

  const updateValue = (woodAmount, foodAmount, stoneAmount, goldAmount) => {
    setCalculationData({ woodAmount, foodAmount, stoneAmount, goldAmount });
  };
  return (
    <Wrapper>
      <ResourcesManager updateValue={updateValue} />
      <Result calculationData={calculationData} />
    </Wrapper>
  )
}

export default Page
