import { useState } from "react";
import "./App.css";
import { useCounter } from "./app/counterStore";

const App = () => {
  // const {count, increment, decrement, incrementAsync} = useCounter();
  // The above is not performance oriented as it listens to every state in the store
  // and re-renders the component unecessarily
  const { count, decrement, incrementAsync } = useCounter(
    (state) => ({
      count: state.count,
      incrementAsync: state.incrementAsync,
      decrement: state.decrement
    })
  );
  return (
    <>
      <button onClick={() => decrement()}>-</button>
      <h1>Count: {count}</h1>
      <button onClick={() => incrementAsync()}>+</button>
    </>
  );
};

export default App;
