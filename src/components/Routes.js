import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
import WelcomePage from "./WelcomePage.js";
import GenUse from "./GenUse.js";
import AbilityScores from "./AbilityScores.js";
import DynamicSheet from './DynamicSheet.js';
import FinalSheet from "./FinalSheet.js";


function Routes(props){
  const history = useHistory();

  const toFinal = () =>{
    history.push('/final');
  }

  //processing player name from WelcomePage
  const [savedPlayerName, setSavedPlayerName] = useState([
    {
      player_name: ""
    }
  ])

  const addNewPlayerName = play =>{
    const newPlayerName = {
      player_name: play.player_name
    }
    setSavedPlayerName([newPlayerName]);
  }

  //processing form info from PCSForm
  const [finalInput, setFinalInput] = useState([
    {
      id: "",
      player_name: "",
      character_name: "",
      dnd_class: "",
      dnd_alignment: "",
      sex: "",
      dnd_race: "",
      chara_level: ""
    }
  ]);


  const addNewChara = char =>{
    const newChara = {
      id: Date.now(),
      dnd_class: char.dnd_class,
      player_level: char.level,
      player_name: char.player_name,
      character_name: char.character_name,
      dnd_alignment: char.dnd_alignment,
      sex: char.sex,
      dnd_race: char.dnd_race,
      chara_level: char.chara_level
    }
    setFinalInput([newChara]);
  }

  //processing dnd Stats that the player chooses from AbilityScores.js

  const [dndStats, setDndStats] = useState([
    {
      str: "",
      dex: "",
      con: "",
      int: "",
      cha: "",
      wis: ""
    }
  ]);

  const addNewDndStats = attr =>{
    const newDndStats ={
      str: attr.str,
      int: attr.int,
      wis: attr.wis,
      dex: attr.dex,
      con: attr.con,
      cha: attr.cha
    }
    setDndStats([newDndStats])
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage addNewPlayerName={addNewPlayerName}/>
        </Route>
        <Route path="/use">
          <GenUse addNewChara={addNewChara} addNewDndStats={addNewDndStats} />
        </Route>
        <Route path="/final">
         <FinalSheet
          finalInput={finalInput}
          dndStats={dndStats}
          savedPlayerName={savedPlayerName}
         />
        </Route>
        <Route path="/ability-scores">
          <AbilityScores 
          addNewDndStats={addNewDndStats}
          finalInput={finalInput}
          />
        </Route>
        <Route path="/selection">
          <DynamicSheet addNewChara={addNewChara} />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;
