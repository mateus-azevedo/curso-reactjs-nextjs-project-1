// import logo from './logo.svg';
import './App.css';
import React, { useCallback, useState } from 'react';
import P from 'prop-types';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho renderizado');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai renderizado');

  return (
    <div className="App">
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
