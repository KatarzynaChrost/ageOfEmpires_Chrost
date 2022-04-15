import React from "react";
import { InputField } from "./Input.styles";


const Input = ({ value, setValue }) => {
    return (
        <InputField
          type='number'
          step='1'
          value={value}
          onChange={(e) => {
            setValue(Number((e.currentTarget.value)))
          }}
        />)
}
export default Input