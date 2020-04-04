import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

//pages
import home from "./pages/home";
import signup from "./pages/signup";

import LoginStart from "./pages/LoginStart";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#585b6c",
      main: "#2f3241",
      dark: "#070a1b",
      contrastText: "#fff"
    },
    secondary: {
      light: "#666ad1",
      main: "#303f9f",
      dark: "#001970",
      contrastText: "#fff"
    }
  },
  typography: {
    useNextVariants: true
  }
});

function App() {
  const login = true;

  const render = login ? (
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/signup" component={signup} />
      </Switch>
    </Router>
  ) : (
    <LoginStart />
  );

  return (
    <div>
      <MuiThemeProvider theme={theme}>{render}</MuiThemeProvider>
    </div>
  );
}

export default App;
