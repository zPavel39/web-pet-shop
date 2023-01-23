import React from 'react'
import background from './image/body/Pattern.png'
import './App.scss';
import { Cards } from './components/Cards/Cards';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`}}>
      <Cards />
    </div>
  );
}

export default App;