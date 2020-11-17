import React from "react";

const FinalSheet = props =>{
  console.log('this is from finalsheet')

  return(
    <div className="chara-input">
    <section className="attributes-chara">
      <h2>Player Name: {props.savedPlayerName[0].player_name}</h2>
      <h2>Name: {props.finalInput[0].character_name}</h2>
      <h2>Sex: {props.finalInput[0].sex}</h2>
      <h2>Race: {props.finalInput[0].dnd_race}</h2>
      <h2>Class: {props.finalInput[0].dnd_class}</h2>
      <h2>Level: {props.finalInput[0].chara_level}</h2>
      <h2>Alignment: {props.finalInput[0].dnd_alignment}</h2>
    </section>
    <section className="dnd-attribute-points">
      <h2>Strength: {props.dndStats[0].str}</h2>
      <h2>Intelegence: {props.dndStats[0].int}</h2>
      <h2>Wisdom: {props.dndStats[0].wis}</h2>
      <h2>Dexterity: {props.dndStats[0].dex}</h2>
      <h2>Constitution: {props.dndStats[0].con}</h2>
      <h2>Charisma: {props.dndStats[0].cha}</h2>
    </section>
    <button>Start Over</button>
</div>
  )
}

export default FinalSheet;