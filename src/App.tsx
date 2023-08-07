import React from 'react';
import './App.css';
import styled from 'styled-components';

//Não deve ser criado dentro da função de render do React
//O certo é criar aqui fora
const StyledHeader = styled.h1`
  color: #3636e9;
  font-size: 42px;
`
const StyledData = styled.p`
  color: #8d8dff;
  font-size: 24px;
  font-weight: 700;
`
const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid black;
  padding: 8px 17px;
`
const StyledSucessButton = styled(StyledButton)`
  border-color: green;
  color: green;
`

const StyledSFailedButton = styled(StyledButton)`
  border-color: red;
  color: red;
`
function App() {
  return (
    <div className="App">
      <StyledHeader>Luiz Almada</StyledHeader>
      <StyledData>luizalmada@yahoo.com</StyledData>
      <StyledData>61-9888-7979</StyledData>
      <StyledData>Brasil</StyledData>
      <StyledSucessButton>Adicionar</StyledSucessButton>
      <StyledSFailedButton>Remover</StyledSFailedButton>
      <StyledButton>Detalhes</StyledButton>
    </div>
  );
}

export default App;
