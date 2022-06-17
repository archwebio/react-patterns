# Context Module

> The Context Module Functions Pattern allows you to
> encapsulate a complex set of state changes into an
> utility function which can be tree-shaken and lazily loaded.

The code and documentation comes from Kent C. Dodds [Advanced React Patterns](https://github.com/kentcdodds/advanced-react-patterns/blob/main/src/exercise/01.md) repo.

## Motivation

The idea is that the _React.Context_ module should be responsible to return the `state`, `dispatch`.
This module should also be responsible to implement custom functions that will interact with the `state` and `dispatch`, providing a cleaner API to the client.
To prevent misuse, a custom hook can also be created to prevent that the application crashes.

This also ensures the _Single Responsibility Principle_ client side, i.e. the client is not responsible to how to update is performed.

## Exercise

Currently `handleSubmit` in `Exercise.js` manipulates the dispatch.
The Exercise consists in refactor that function into `updateUser` inside `Context` module.
This function will receive `dispatch` with other required variables and returns a Promise.
The function `handleSubmit` only calls `updateUser` and handles results or errors.

## Resources

- [Kent C. Dodds - advanced-react-patterns](https://github.com/kentcdodds/advanced-react-patterns/blob/main/src/exercise/01.js) repo. Contains the code that inspired this exercise.
