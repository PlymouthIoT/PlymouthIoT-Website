import './App.css';
import ResAppBar from './components/navbar';
import Home from "./components/page_home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <ResAppBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
