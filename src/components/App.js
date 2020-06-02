import React from 'react';
import AddMessage from './addmessage';
import Panel from './panel';
import './static.css'

const App = () => {
  return (
      <div id="main_panel">
        <h1>Assignment 2</h1>
        <AddMessage/>
        <Panel/>
      </div>
  );
}

export default App;