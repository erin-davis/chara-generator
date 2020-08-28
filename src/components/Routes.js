import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WelcomePage from "./WelcomePage.js";
import GeneratorUse from "./GeneratorUse.js";
import PotentialCharaSheet from "./PotentialCharaSheet.js";
import FinalCharaSheet from "./FinalCharaSheet.js";
import AbilityScores from "./AbilityScores.js";

function Routes(props){
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage 
          addNewChara={props.addNewChara}
          />
        </Route>
        <Route path="/use">
          <GeneratorUse />
        </Route>
        <Route path="/final">
          <FinalCharaSheet
          inputChara={props.inputChara}
          />
        </Route>
        <Route path="/ability-scores">
          <AbilityScores />
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
