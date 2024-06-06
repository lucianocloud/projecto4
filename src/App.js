
import './App.css';
import logosenaiv  from "./img/logov.jpg"
import logosenaia from "./img/logoa.png"

function App() {
  return (
    <div className="App">
      <header>
        <img src={logosenaiv} alt=''/>
        <ul>
          <li>Home</li>
          <li>Produtos</li>
          <li>Sobre</li>
        </ul>
        <img src={logosenaia} alt=''/>
      </header>

    </div>
  );
}

export default App
