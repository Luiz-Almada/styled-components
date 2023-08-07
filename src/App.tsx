import React, { useState } from 'react';
// import './App.css';
import styled, { ThemeProvider, css, keyframes } from 'styled-components';

type TStyledButtonPropos = {
  varient?: "success" | "failed"
}

const RotateKeyFrame = keyframes`
  from {
    transform: rotate(0deg)
  }

  to{
    transform: rotate(360deg)
  }
`


const themeBlue = {
  main: "blue",
  secondary: "#8d8dff"
};

const themeRed = {
  main: "red",
  secondary: "#ff4343"
};

const Rotate = styled.div`
  animation: ${RotateKeyFrame} 0.5s infinite;
  width: 100px;
`

//Não deve ser criado dentro da função de render do React
//O certo é criar aqui fora
  /* background: ${(props) => (props.bg ? props.bg : "transparent")}; */
//
const StyledHeader = styled.h1`
  /* color: #3636e9; */
  color: ${(props) => props.theme.main};
  font-size: 42px;
`
const StyledData = styled.p`
  /* color: #8d8dff; */
  color: ${(props) => props.theme.secondary};
  font-size: 24px;
  font-weight: 700;
`
const StyledButton = styled.button<TStyledButtonPropos>`
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid black;
  padding: 8px 16px;

  &:hover {
    cursor: pointer;
    /* animation: ${RotateKeyFrame} 0.5s; */
    background-color: #f2f2f2;
  };

   ${(props) => {
    // console.log(props);
    if (props.varient === "success"){
      return css`
        border-color: green;
        color: green;
      `
    }

    if (props.varient === "failed"){
      return css`
        border-color: red;
        color: red;
      `
    }    
  }}
`

function App() {
  const [theme, setTheme] = useState(themeBlue);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <StyledHeader>Luiz Almada</StyledHeader>
        <div>
          <StyledButton onClick={() => setTheme(themeBlue)}>Set Blue Theme</StyledButton>
          <StyledButton style={{marginLeft: "8px"}} onClick={() => setTheme(themeRed)}>Set Red Theme</StyledButton>

        </div>
        <StyledData>luizalmada@yahoo.com</StyledData>
        <StyledData>61-9888-7979</StyledData>
        <StyledData>Brasil</StyledData>
        
        {/* <Rotate>Teste</Rotate> */}
        
        <StyledButton varient="success">Adicionar</StyledButton>
        <StyledButton varient="failed" style={{marginLeft: "8px"}}>Remover</StyledButton>
        <StyledButton style={{marginLeft: "8px"}}>Detalhes</StyledButton>
      </ThemeProvider>
    </div>
  );
}

export default App;
