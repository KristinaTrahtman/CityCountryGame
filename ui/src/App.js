import React from 'react';
import './App.css';
import GameTitle from './components/GameTitle'
import GenerateRandomLetter from './components/GenerateRandomLetter'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <GameTitle />
      {/* R.R  not sure this is the best name. a would think this only handles the generate letter and not also all the Categories... */}
      <GenerateRandomLetter />
    </div>
  );  
}

export default App;
