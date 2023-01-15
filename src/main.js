import "./app.postcss";
import App from "./App.svelte";
import 'animate.css'

const app = new App({
  target: document.getElementById("app"),
});

export default app;
