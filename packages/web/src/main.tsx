import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Button from "@mui/material/Button";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
