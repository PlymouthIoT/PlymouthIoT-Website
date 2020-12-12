import './App.css';
import ResAppBar from './components/navbar';
import Footer from './components/footer';
import Home from "./components/page_home";
import Network from "./components/page_network";
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
          <Route exact path="/network">
            <Network />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
