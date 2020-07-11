import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import WelcomePage from "./components/WelcomePage.js";
import GeneratorUse from "./components/GeneratorUse.js";
import FinalCharaSheet from "./components/FinalCharaSheet.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/use">
            <GeneratorUse />
          </Route>
          <Route path="/final">
            <FinalCharaSheet />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
