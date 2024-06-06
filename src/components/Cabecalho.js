import React from "react";
import logosenaiv  from "../img/logov.jpg"
import logosenaia from "../img/login.png"
import Menu from "./Menu";
import Login from "./Login";
import styled from "styled-components";

const CabecalhoContainer = styled.header `
display: flex; /* Arrange elements horizontally */
justify-content: space-between; /* Distribute elements evenly */
align-items: center; /* Align elements vertically in the center */
padding: 1rem; /* Add some padding */
background-color: rgb(218, 37, 28); /* Set background color to red */
`

function Cabecalho() {
    return(
        <CabecalhoContainer>
            <logo/>
            <Menu/>
            <Login/>
        </CabecalhoContainer>
    );
}

export default Cabecalho;