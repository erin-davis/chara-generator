import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import WelcomePage from "./components/WelcomePage.js";
import GeneratorUse from "./components/GeneratorUse.js";
import PotentialCharaSheet from "./components/PotentialCharaSheet.js";
import FinalCharaSheet from "./components/FinalCharaSheet.js";
import DNDGenerator from "./components/DND5EGeneratorAPI.js";

function App() {
  return (
    <div className="App">
    <DNDGenerator />
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
          <Route path="/selection">
            <PotentialCharaSheet />
          </Route>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
