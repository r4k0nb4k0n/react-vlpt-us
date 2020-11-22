import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  const onIncrease = () => {
    console.log('+1')
    setCounter(prevCounter => prevCounter + 1)
  }
  const onDecrease = () => {
    console.log('-1')
    setCounter(prevCounter => prevCounter - 1)
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
