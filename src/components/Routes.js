import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WelcomePage from "./WelcomePage.js";
import GeneratorUse from "./GeneratorUse.js";
import PotentialCharaSheet from "./PotentialCharaSheet.js";
import FinalCharaSheet from "./FinalCharaSheet.js";

function Routes(props){
  return (
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
          <PotentialCharaSheet
          addNewChara={props.addNewChara}
          
          />
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;
