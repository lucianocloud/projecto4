import React from "react";
import logosenaiv  from "../img/logov.jpg"
import logosenaia from "../img/login.png"

function Cabecalho() {
    return(
        <header id='cabecalho'>
        <img id='logov' src={logosenaiv} alt=''/>
        <ul id='menu'>
          <li>Home</li>
          <li>Produtos</li>
          <li>Sobre</li>
        </ul>
        <img id='logoa' src={logosenaia} alt=''/>
      </header>
    );
}

export default Cabecalho;