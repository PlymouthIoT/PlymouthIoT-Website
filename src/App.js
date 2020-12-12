import './App.css';
import ResAppBar from './components/navbar';
import Footer from './components/footer';
import Home from "./components/page_home";
import Network from "./components/page_network";
import Documentation from "./components/page_documentation";
import Docs_Introduction from "./components/page_docs_introduction";
import Docs_Gateway from "./components/page_docs_gateway";
import Docs_ArduinoNode from "./components/page_docs_arduino";
import Docs_MapperNode from "./components/page_docs_mapper";
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
          <Route exact path="/documentation">
            <Documentation />
          </Route>
          <Route exact path="/documentation/introduction">
            <Docs_Introduction />
          </Route>
          <Route exact path="/documentation/host-a-gateway">
            <Docs_Gateway />
          </Route>
          <Route exact path="/documentation/arduino-hello-world-node">
            <Docs_ArduinoNode />
          </Route>
          <Route exact path="/documentation/ttgo-t-beam-mapper-node">
            <Docs_MapperNode />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
