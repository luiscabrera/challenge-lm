import React from 'react';
import './App.css';
import Results from './views/Results/Results.view';
import Search from './views/Search/Search.view';

function App() {
  return (
    <div className="App">
      <Search />
      <Results query={"mesa madera"} />
    </div>
  );
}

export default App;
