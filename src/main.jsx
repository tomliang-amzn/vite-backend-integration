import "vite/modulepreload-polyfill";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";

const app = document.querySelector("#app");
const root = ReactDOM.createRoot(app);
root.render(<App />);
