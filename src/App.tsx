import React from 'react';
import './App.css';
import Results from './views/Results.view';

function App() {
  return (
    <div className="App">
      <p>Challenge Meli</p>
      <Results query={"pantalon verde"} />
    </div>
  );
}

export default App;
