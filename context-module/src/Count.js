import React from "react";

// ---
const CounterContext = React.createContext();

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const CounterProvider = ({ step = 1, initialCount = 0, ...props }) => {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      const change = action.step ?? step;
      switch (action.type) {
        case INCREMENT: {
          return { ...state, count: state.count + change };
        }
        case DECREMENT: {
          return { ...state, count: state.count - change };
        }
        default: {
          throw new Error(`Unhandled action type: ${action.type}`);
        }
      }
    },
    { count: initialCount }
  );

  const value = [state, dispatch];

  return <CounterContext.Provider value={value} {...props} />;
};

const useCounter = () => {
  const context = React.useContext(CounterContext);
  if (context === undefined) {
    throw new Error(`useCounter must be used within a CounterProvider`);
  }
  return context;
};

// const increment = (dispatch) => dispatch({ type: INCREMENT });
// const decrement = (dispatch) => dispatch({ type: DECREMENT });

// export { CounterProvider, useCounter, INCREMENT, DECREMENT }

// ---
// import {useCounter, INCREMENT, DECREMENT}
const Counter = () => {
  const [state, dispatch] = useCounter();
  const increment = () => dispatch({ type: INCREMENT });
  const decrement = () => dispatch({ type: DECREMENT });

  return (
    <div>
      <div>Current Count: {state.count}</div>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
};

// ---
// import { CounterProvider } from 'context/counter'

const Count = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default Count;
