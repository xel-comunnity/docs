import ConfigRouter from "./route_path/ConfigRouter";
import { Route } from "@solidjs/router";
import Home from "./pages/Home";
import About from "./pages/About";
import { MetaProvider, Title, Meta } from "@solidjs/meta";
function App() {
  return (
      <ConfigRouter />
  );
}

export default App;
