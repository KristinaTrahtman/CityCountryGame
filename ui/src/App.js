import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import GameTitle from './components/GameTitle'
import Country from './components/Country'
import Timer from './components/Timer'
import GenerateRandomLetter from './components/GenerateRandomLetter'
// import Message from './components/Message'


function App() {
  return (
    <div className="App">
      <Timer />
      <GenerateRandomLetter/>
      <GameTitle />
      <Country/> 
  
    </div>
  );  
}

export default App;
