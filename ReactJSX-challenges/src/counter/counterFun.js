import React, { useState, useEffect } from 'react';

function CounterFunApp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default CounterFunApp;
