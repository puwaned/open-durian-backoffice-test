import { HashRouter, useRoutes } from "react-router-dom";
import { APP_ROUTE } from "./routes";

const Routes = () => {
  const routes = useRoutes(APP_ROUTE);
  return routes;
};

function App() {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
}

export default App;
