import React from "react";
import { ButtonContainer } from "./styles";


export function Button({onclick}){
  return(
    <ButtonContainer onclick={onclick}>
      Buscar
    </ButtonContainer>
  )
}