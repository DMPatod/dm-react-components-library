SearchInput
Modalizado Indepentemente

```jsx
import SearchInput from "./index";

const [state, setState] = React.useState({
  value: "",
});

<SearchInput
  label={"Search Input"}
  input={["value", state, setState]}
  placeholder={"Need a Object State"}
  description={"SearchInput: Modalizado Indepentemente"}
  onClickHandler={() => alert(state.value)}
/>;
```
