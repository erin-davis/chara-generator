//this is where the other 2 files for the form will collect and connect together
//the same as index.js
import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PCSInfo from "./PCSInfo";
import PCSForm from "./PCSForm";

function FormCollector(){
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

  return(
    <div>
      <PCSForm addNewChara={addNewChara} addNewAttributes={addNewAttributes}/>
      <PCSInfo finalInput={finalInput} dndStats={dndStats}/>
    </div>
  )
}

export default FormCollector;