import React, {useState} from "react";
import {Link} from "react-router-dom";
//url is /final

const FinalCharaSheet = (props) =>{





  // console.log("addnew chara looks like this ", props.addNewChara)

  // console.log("form chara??", props.formChara);

  console.log("this is inputchara", props.inputChara);

  return(
    <div className="final-page" >
      <h1>This is the final page! We did it!!! Here's how your Character looks :)</h1>
      {props.inputChara.map(iChar =>{
        return(
      <section className="chara-attributes" key={iChar.id}>
        <h2>Name: {iChar.name}</h2>
        <h2>Sex: {iChar.sex}</h2>
        <h2>Class: {iChar.dnd_class}</h2>
        <h2>Level: {iChar.player_level}</h2>
        <h2>Player Name: {iChar.player_name}</h2>
        <h2>Alignment: {iChar.alignment}</h2>
      </section>
        )
      })}
      <section className="ability-mods">
        <h2>STR: {props.inputChara.str}</h2>
        <h2>INT: {props.inputChara.int}</h2>
        <h2>WIS: {props.inputChara.wis}</h2>
        <h2>DEX: {props.inputChara.dex}</h2>
        <h2>CON: {props.inputChara.con}</h2>
        <h2>CHA: {props.inputChara.cha}</h2>
      </section>
      {/* needs to have something to send back to homepage <button>Start Over</button> */}
    </div>
  )
}

export default FinalCharaSheet;
