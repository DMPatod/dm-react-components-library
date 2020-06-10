A Modal to show messagens of success and errors for the user and helps to show the error for the develop.

```jsx
import StatusModal from "./index";
import { Button } from "react-bootstrap";

const _initAppState = {
  messages: [],
  errors: [],
};
const [appState, setAppState] = React.useState({
  ..._initAppState,
});

<div>
  <Button
    onClick={() =>
      setAppState({
        status: false,
        messages: ["Não foi possivel realizar o cadastro"],
        errors: [
          {
            error: "Exeception on 9:35",
            message: "Cannot convert type number to type string",
          },
        ],
      })
    }
  >
    Show Error Modal
  </Button>
  <StatusModal
    appState={appState}
    closeModal={() => setAppState({..._initAppState})}
  />
</div>;
```
