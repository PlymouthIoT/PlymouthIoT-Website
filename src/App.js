import './App.css';
import NavBar from "./components/navbar";
import Home from "./components/page_home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <NavBar />
        <div style={{padding:10}}></div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
