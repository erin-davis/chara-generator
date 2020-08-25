import React, {useState} from "react";
import {Link} from "react-router-dom";
//url is /final

const FinalCharaSheet = (props) =>{
  const [inputChara, setInputChara] = useState([
    {
      'id': 1,
      'name': "Character Name",
      'class': "Cleric",
      'level': 4,
      'player_name': "Erin Davis",
      'alignment': "Chaotic Neutral",
      'str': 16,
      'int': 12,
      'wis': 7,
      'dex': 14,
      'con': 10,
      'cha': 11
    }
  ]);

  const addNewChara = char =>{
    const newChara = {
      'id': Date.now(),
      'name': char.name,
      'class': char.class,
      'level': char.level,
      'player_name': char.player_name,
      'alignment': char.alignment,
      'str': 16,
      'int': 12,
      'wis': 7,
      'dex': 14,
      'con': 10,
      'cha': 11
    }
    setInputChara([...inputChara, newChara]);
  };

  console.log("this is input chara", inputChara);

  console.log("form chara??", props.formChara);
  console.log("new chara??", props.formChara);

  return(
    <div className="final-page" >
      <h1>This is the final page! We did it!!! Here's how your Character looks :)</h1>
      <section className="chara-attributes">
        <h2>Name: {inputChara[0].name}</h2>
        <h2>Class: {inputChara[0].class}</h2>
        <h2>Level: {inputChara[0].level}</h2>
        <h2>Player Name: {inputChara[0].player_name}</h2>
        <h2>Alignment: {inputChara[0].alignment}</h2>
      </section>
      <section className="ability-mods">
        <h2>STR: {inputChara[0].str}</h2>
        <h2>INT: {inputChara[0].int}</h2>
        <h2>WIS: {inputChara[0].wis}</h2>
        <h2>DEX: {inputChara[0].dex}</h2>
        <h2>CON: {inputChara[0].con}</h2>
        <h2>CHA: {inputChara[0].cha}</h2>
      </section>
      <Link to="/"><button>Start Over</button></Link>
    </div>
  )
}

export default FinalCharaSheet;
