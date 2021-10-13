// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function eventFn() {
  console.log('h1 clicado');
}

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate = executa toda vez que o component atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount = executa uma vez
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // componentWillUnmount = limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // com dependencia = executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('counter change to', counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
    </div>
  );
}

export default App;
