// Counter.js
import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const feedback = count > 10 ? "It's higher than 10!" : 'Keep counting...';

  return (
    <div>
      <h1>Counter App</h1>
      <Count count={count} />
      <Button increment={incrementCount} />
      <p>{feedback}</p>
    </div>
  );
}

export default Counter;
