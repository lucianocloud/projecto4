
import './App.css';
import logosenaiv  from "./img/logov.jpg"
import logosenaia from "./img/login.png"

function App() {
  return (
    <div className="App">
      <header id='cabecalho'>
        <img id='logov' src={logosenaiv} alt=''/>
        <ul id='menu'>
          <li>Home</li>
          <li>Produtos</li>
          <li>Sobre</li>
        </ul>
        <img id='logoa' src={logosenaia} alt=''/>
      </header>

    </div>
  );
}

export default App
