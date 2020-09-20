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

  const addNewAttributes = attr =>{
    const newAttributes ={
      str: attr.str,
      int: attr.int,
      wis: attr.wis,
      dex: attr.dex,
      con: attr.con,
      cha: attr.cha
    }
    setDndStats([newAttributes])
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage 
          />
        </Route>
        <Route path="/use">
          <GeneratorUse />
        </Route>
        <Route path="/final">
         <PCSInfo finalInput={finalInput} dndStats={dndStats}/>
        </Route>
        <Route path="/ability-scores">
          <AbilityScores />
        </Route>
        <Route path="/selection">
          <PCSForm addNewChara={addNewChara} addNewAttributes={addNewAttributes}/>
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;
