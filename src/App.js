import './App.css';
import Cabecalho from './components/Cabecalho';
import Menu from './components/Menu';
import Login from './components/Login';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Logo/>
      <Menu/>
      <Login/>
    </div>
  );
}

export default App
