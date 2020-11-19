import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = '너구리';
  const style = {
    backgroundColor: 'black',
    color: 'cyan',
    fontSize: 24,
    padding: '1rem'
  };
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <input />
      <br />
      <div style={ style }>{ name }</div>
      <div className="gray-box"></div>
    </div>
  );
}

export default App;
