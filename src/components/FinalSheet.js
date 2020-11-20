import React from "react";
import {useHistory} from "react-router-dom";
import "../styles/finalSheet.css"

const FinalSheet = props =>{
  const history = useHistory();
  const toStart = () =>{
    history.push('/');
  }
  return(
    <div className="final-chara-sheet">
      <div className="character-sheet">
        <h1>Here is your final character sheet! Be kind to your new character. Or don't! I'm not a cop.</h1>
        <div className="character-details">
          <h3>Player Name: </h3><p>{props.savedPlayerName[0].player_name ? `${props.savedPlayerName[0].player_name}` : "No input name :("}</p>
          <h3>Character Name: </h3><p>{props.finalInput[0].character_name}</p>
          <h3>Level: </h3><p>{props.finalInput[0].chara_level}</p>
          <h3>Class: </h3><p>{props.finalInput[0].dnd_class}</p>
          <h3>Race: </h3><p>{props.finalInput[0].dnd_race}</p>
          <h3>Morality Alignment: </h3><p>{props.finalInput[0].dnd_alignment}</p>
        </div>
        <div className="stats">
          <section className="AC">
            <p>{props.dndStats[0].dex > 4 ? `${10 + (Math.floor((props.dndStats[0].dex - 10) / 2)) }` : null}</p>
            <h3>Armor Class</h3>
          </section>
          <section className="initiative">
          <p>{props.dndStats[0].dex > 4 ? `${10 + (Math.floor((props.dndStats[0].dex - 10) / 2)) }` : null}</p>
            <h3>Initiative</h3>
          </section>
        </div>
        <div className="ability-stats">
          <section>
            <p>{props.dndStats[0].str}{props.dndStats[0].str > 4 ? `(${Math.floor((props.dndStats[0].str - 10) / 2)})` : null}</p>
            <h3>Strength</h3>
          </section>
          <section>
            <p>{props.dndStats[0].dex}{props.dndStats[0].dex > 4 ? `(${Math.floor((props.dndStats[0].dex - 10) / 2)})` : null}</p>
            <h3>Dexterity</h3>
          </section>
          <section>
            <p>{props.dndStats[0].con}{props.dndStats[0].con > 4 ? `(${Math.floor((props.dndStats[0].con - 10) / 2)})` : null}</p>
            <h3>Constitution</h3>
          </section>
          <section>
            <p>{props.dndStats[0].int}{props.dndStats[0].int > 4 ? `(${Math.floor((props.dndStats[0].int - 10) / 2)})` : null}</p>
            <h3>Intellegence</h3>
          </section>
          <section>
            <p>{props.dndStats[0].cha}{props.dndStats[0].cha > 4 ? `(${Math.floor((props.dndStats[0].cha - 10) / 2)})` : null}</p>
            <h3>Charisma</h3>
          </section>
          <section>
            <p>{props.dndStats[0].wis}{props.dndStats[0].wis > 4 ? `(${Math.floor((props.dndStats[0].wis - 10) / 2)})` : null}</p>
            <h3>Wisdom</h3>
          </section>
        </div>
        <div className="buttons">
          <button onClick={toStart}>Start Over!</button>
        </div>
      </div>
  </div>
  )
}

export default FinalSheet;