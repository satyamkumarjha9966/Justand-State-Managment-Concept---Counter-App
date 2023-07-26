import './App.css';
import react from 'react';

// Using Zustand Store
import { useStore } from './store/justand';

function App() {
  const count = useStore(state => state.count);
  const increaseCount = useStore(state => state.increaseCount);
  const decreaseCount = useStore(state => state.decreaseCount);
  const reset = useStore(state => state.reset);

  return (
    <div className="App">
      <h1>Counter App <br/> Using React Justand State Managment Concept</h1>
      <span>{count}</span>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
