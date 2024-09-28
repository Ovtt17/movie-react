import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Navegacion from './components/Navegacion';

function App() {
  return (
    <div>
      <Navegacion />
      <Saludo nombre="Ovett Mora" />
    </div>
  );
}

export default App;
