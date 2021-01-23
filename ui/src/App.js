import React from 'react';
import './App.css';
import GameTitle from './components/GameTitle'
import GenerateRandomLetter from './components/GenerateRandomLetter'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <GameTitle />
      <GenerateRandomLetter />
    </div>
  );  
}

export default App;
