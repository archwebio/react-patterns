# Compound Components

> Think of compound components like the \<select> and \<option> elements in HTML. Apart they don’t do too much, but together they allow you to create the complete experience.
> [Kent C. Dodds](https://kentcdodds.com/blog/advanced-react-component-patterns)

In the case of `select` and `option`, the former mages state; the latter, configuration

## Motivation

- When a component have sub-components and they all share state

# Occurence

- [Reach Menu Example](https://reach.tech/menu-button)
- [Semantic](https://react.semantic-ui.com/modules/accordion/#types-standard)
- [MaterialUI](https://mui.com/material-ui/react-menu/)

## Exemple

By default the shared state is implicit, children components do not have access to state nor the mechanism to update the state.
The state is completelly managed by the parent.

```jsx
function Toggle({ children }) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  return React.Children.map(children, (child) => {
    const newChild = React.cloneElement(child, { on, toggle });

    return newChild;
  });
}

const ToggleOn = ({ on, children }) => (on ? children : null);
const ToggleOff = ({ on, children }) => (on ? null : children);
const ToggleButton = ({ on, toggle }) => <Switch on={on} onClick={toggle} />;

export { Toggle, ToggleOn, ToggleOff, ToggleButton };
```

```jsx
import { Toggle, ToggleOn, ToggleOff, ToggleButton } from "components/Toggle";

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  );
}
```

## Exercise

Available in [compound component](./compound-component/README.md)

[↩️ Back](./0-intro.md)
