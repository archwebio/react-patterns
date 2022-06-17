# Context Module

> Kent C. Dodds proposes [Context Module](https://github.com/kentcdodds/advanced-react-patterns/blob/main/src/exercise/01.md)
> Uses Single Responsibility principle and provides better API

## Motivation

- Encapsulate methods related to `React.Context` and provide cleaner API to client
- [Code splitting](https://twitter.com/dan_abramov/status/1125774170154065920)

## Example

Context returns `state` and `dispatch` with custom hook

```jsx
// context/count.ts
const INC = "INCREMENT";
const DEC = "DECREMENT";

const CountContext = React.createContext();

const CountProvider = ({ initialValue = 0, step = 1, ...props }) => {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      const change = action.step ?? step;
      switch (action.type) {
        case INC:
          return { ...state, count: state.count + change };

        case DEC:
          return { ...state, count: state.count - change };

        default:
          throw new Error(`Unhandeled action type ${action.type}`);
      }
    },
    { count: initialValue }
  );

  const value = [state, dispatch];

  return <CountContext.Provider value={value} {...props} />;
};

const useCount = () => {
  const context = React.useContext(CountContext);
  if (context === "undefined") throw new Error("No such context");
  else return context;
};

const increment = (dispatch) => dispatch({ type: INCREMENT });
const decrement = (dispatch) => dispatch({ type: DECREMENT });

export { CountProvider, useCount, increment, decrement };
```

Component that consumes context through custom hook with its associated methods

```jsx
// components/count
import { useCount, increment, decrement } from "context/user";

function Counter() {
  const [state, dispatch] = useCounter();
  return (
    <div>
      <div>Current Count: {state.count}</div>
      <button onClick={() => decrement(dispatch)}>-</button>
      <button onClick={() => increment(dispatch)}>+</button>
    </div>
  );
}
```

Main `App` component

```jsx
import { CountProvider } from "context/count";
import { Count } from "components/count";

const App = () => {
  <CountProvider>
    <Count />
  </CountProvider>;
};
```

## Exercise

Available in [context-module](./context-module/README.md)

[↩️ Back](./0-intro.md)
