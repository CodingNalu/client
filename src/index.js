import { createRoot } from "react-dom/client";
import { AppProvider } from "./context/appContext.js";
import App from "./App.js";
import "normalize.css";
import "./index.css";
const root = createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
