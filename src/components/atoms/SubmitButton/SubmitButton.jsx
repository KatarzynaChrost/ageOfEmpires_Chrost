import React from 'react'
import { Button } from './SubmitButton.styles'

const SubmitButton = ({ updateValue, woodAmount, foodAmount, stoneAmount, goldAmount }) => {
    return (
        <Button
          type='submit'
          value='Oblicz'
          onClick={() =>
            updateValue(woodAmount, foodAmount, stoneAmount, goldAmount)
          }
        />
    )
}
export default SubmitButton