import React, { useState } from 'react'
import {
  Form,
  InputWrapper,
  InputsWrapper,
  Header
} from './ResourcesManager.styles'
import Input from '../../atoms/Input/Input'
import SubmitButton from '../../atoms/SubmitButton/SubmitButton'

const ResourcesManager = ({ updateValue }) => {
  const [woodAmount, setWoodAmount] = useState(0)
  const [foodAmount, setFoodAmount] = useState(0)
  const [stoneAmount, setStoneAmount] = useState(0)
  const [goldAmount, setGoldAmount] = useState(0)

  return (
      <Form onSubmit={(e) => {
          e.preventDefault()
      }}>
      <Header>Uzupełnij posiadane jednostki</Header>
      <InputsWrapper>
        <InputWrapper>
          <label>Drewno</label>
          <Input value={woodAmount} setValue={setWoodAmount}/>
        </InputWrapper>
        <InputWrapper>
          <label>Żywność</label>
          <Input value={foodAmount} setValue={setFoodAmount}/>
        </InputWrapper>
        <InputWrapper>
          <label>Kamień</label>
          <Input value={stoneAmount} setValue={setStoneAmount}/>
        </InputWrapper>
        <InputWrapper>
          <label>Złoto</label>
          <Input value={goldAmount} setValue={setGoldAmount}/>
        </InputWrapper>
      </InputsWrapper>
      <SubmitButton updateValue={updateValue} woodAmount={woodAmount} foodAmount={foodAmount} stoneAmount={stoneAmount} goldAmount={goldAmount}/>
    </Form>
  )
}

export default ResourcesManager
