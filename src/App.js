import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./config/theme";
import { Home, Join } from "./Pages";
const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/join" component={Join} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
