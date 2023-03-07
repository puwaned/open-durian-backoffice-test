import { HashRouter, useRoutes } from "react-router-dom";
import AppThemeProvider from "./providers/app-theme";
import { APP_ROUTE } from "./routes";

const Routes = () => {
  const routes = useRoutes(APP_ROUTE);
  return routes;
};

function App() {
  return (
    <HashRouter>
      <AppThemeProvider>
        <Routes />
      </AppThemeProvider>
    </HashRouter>
  );
}

export default App;
