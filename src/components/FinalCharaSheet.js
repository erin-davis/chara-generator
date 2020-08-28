import React, {useState} from "react";
import {Link} from "react-router-dom";
//url is /final

const FinalCharaSheet = (props) =>{
  const [inputChara, setInputChara] = useState([
    {
      'id': 6,
      'name': "Character Name",
      'class': "Barbarian",
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
      'dnd_race': "",
      'str': '',
      'int': "",
      'wis': "",
      'dex': '',
      'con': '',
      'cha': ""
    }
    setInputChara([newChara]);
    console.log("from add new chara", char['player-level']);
  };

  console.log("this is input chara", inputChara.dnd_class);
  console.log("addnew chara looks like this ", addNewChara)

  console.log("form chara??", props.formChara);

  return(
    <div className="final-page" >
      <h1>This is the final page! We did it!!! Here's how your Character looks :)</h1>
      <section className="chara-attributes">
        <h2>Name: {inputChara.name}</h2>
        <h2>Class: {inputChara.dnd_class}</h2>
        <h2>Level: {inputChara.player_level}</h2>
        <h2>Player Name: {inputChara.player_name}</h2>
        <h2>Alignment: {inputChara.alignment}</h2>
      </section>
      <section className="ability-mods">
        <h2>STR: {inputChara.str}</h2>
        <h2>INT: {inputChara.int}</h2>
        <h2>WIS: {inputChara.wis}</h2>
        <h2>DEX: {inputChara.dex}</h2>
        <h2>CON: {inputChara.con}</h2>
        <h2>CHA: {inputChara.cha}</h2>
      </section>
      <Link to="/"><button>Start Over</button></Link>
    </div>
  )
}

export default FinalCharaSheet;
