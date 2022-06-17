# Compound Component

The code and documentation comes from Kent C. Dodds [Advanced React Patterns](https://github.com/kentcdodds/advanced-react-patterns/blob/main/src/exercise/02.md) repo.

## Motivation

The idea is that the _React.Context_ module should be responsible to return the `state`, `dispatch`.

## Exercise

The main part of the exercise is to use `React.Children.map` to pass state to its immediate children by cloning them.

A next phase consists of nesting one (or more) of the children in a `<div>` and use `React.createContext()` in order to pass state to its children

Finally, as a bonus, a custom hook can be created to ensure that a context is present.

## Resources

- [Kent C. Dodds - compound-component](https://github.com/kentcdodds/advanced-react-patterns/blob/main/src/exercise/03.md) repo. Contains the code that inspired this exercise.
- [Kent C. Dodds - React Hooks: Compound Components](https://kentcdodds.com/blog/compound-components-with-react-hooks) article.
- [LogRocket - Understanding React compound components](https://blog.logrocket.com/understanding-react-compound-components/) article.
