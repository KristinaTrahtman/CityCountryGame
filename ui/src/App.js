import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import GameTitle from './components/GameTitle'
import Country from './components/Country'
import Timer from './components/Timer'
// import Message from './components/Message'


function App() {
  return (
    <div className="App">
      <Timer />
      <GameTitle />
      <Country/> 
  
    </div>
  );  
}

export default App;
