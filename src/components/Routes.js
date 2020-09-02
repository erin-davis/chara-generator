import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WelcomePage from "./WelcomePage.js";
import GeneratorUse from "./GeneratorUse.js";
import PotentialCharaSheet from "./PotentialCharaSheet.js";
import FinalCharaSheet from "./FinalCharaSheet.js";
import AbilityScores from "./AbilityScores.js";

function Routes(props){
  const [inputChara, setInputChara] = useState([
    {
      'id': 6,
      'name': "Character Name",
      'class': "Barbarian",
      'sex': '',
      'level': "5",
      'player_name': "Erin Davis",
      'alignment': "Chaotic Neutral",
      'str': "",
      'int': '',
      'wis': '',
      'dex': '',
      'con': '',
      'cha': ''
    }
  ]);
  const addNewChara = char =>{
    const newChara = {
      'id': Date.now(),
      'name': char.name,
      'dnd_class': char.class,
      'player_level': char.level,
      'player_name': char.player_name,
      'dnd_alignment': char.alignment,
      'sex': 'r',
      'dnd_race': "",
      'str': '',
      'int': "",
      'wis': "",
      'dex': '',
      'con': '',
      'cha': ""
    }
    setInputChara([newChara]);
    console.log("from add new chara", char);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage 
          addNewChara={addNewChara}
          />
        </Route>
        <Route path="/use">
          <GeneratorUse />
        </Route>
        <Route path="/final">
          <FinalCharaSheet
          inputChara={inputChara}
          addNewChara={addNewChara}
          />
        </Route>
        <Route path="/ability-scores">
          <AbilityScores />
        </Route>
        <Route path="/selection">
          <PotentialCharaSheet
          addNewChara={addNewChara}
          />
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;
