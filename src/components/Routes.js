import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WelcomePage from "./WelcomePage.js";
import GeneratorUse from "./GeneratorUse.js";
//import PotentialCharaSheet from "./PotentialCharaSheet.js";
//import FinalCharaSheet from "./FinalCharaSheet.js";
import AbilityScores from "./AbilityScores.js";
import PCSForm from './Forms/PCSForm.js';
import PCSInfo from './Forms/PCSInfo.js';


function Routes(props){
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
      dnd_alignment: char.dnd_alignment,
      sex: char.sex,
      dnd_race: char.dnd_race,
      chara_level: char.chara_level
    }
    setFinalInput([newChara]);
  }

  //processing dnd Stats that the player chooses

  const [dndStats, setDndStats] = useState([
    {
      str: '',
      int: "",
      wis: "",
      dex: '',
      con: '',
      cha: ""
    }
  ])

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
          <GeneratorUse />
        </Route>
        <Route path="/final">
         <PCSInfo
          finalInput={finalInput}
          dndStats={dndStats}
          savedPlayerName={savedPlayerName}
         />
        </Route>
        <Route path="/ability-scores">
          <AbilityScores />
        </Route>
        <Route path="/selection">
          <PCSForm addNewChara={addNewChara} />
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;
