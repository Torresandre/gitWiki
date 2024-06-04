import React from "react";

import { InputContainer } from "./styles";

export function Input ({value, onChange}){
  return(
    <InputContainer>
      <input value={value} onChange={onChange}/>
    </InputContainer>
  )
}