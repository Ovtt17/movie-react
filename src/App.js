import './App.css';
import Greeting from './components/Greeting';
import ListMovie from './components/ListMovie';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Greeting name="Ovett Mora" />
      <ListMovie />
    </div>
  );
}

export default App;
