import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Greeting name="Ovett Mora" />
    </div>
  );
}

export default App;
