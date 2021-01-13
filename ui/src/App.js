import logo from './logo.svg';
import './App.css';
import GameTitle from './components/GameTitle'
import GenerateRandomLetter from './components/GenerateRandomLetter'
import Categories from './components/Categories';
import Popup from 'react-popup';


function App() {
  return (
    <div className="App">
      <GameTitle />
      <GenerateRandomLetter/>
      {/* <Categories/>  */}
    </div>
  );  
}

export default App;
