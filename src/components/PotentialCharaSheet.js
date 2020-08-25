import React, {useState} from "react";
import {Link} from "react-router-dom";
import {raceHolder, dndClassHolder, charaAlign} from "../data/APIPlaceHolder.js";
//url is /selection

const PotentialCharaSheet = (props) =>{
  //console.log("from inside race Holder", raceHolder);
  const [formChara, setFormChara] = useState({
      'name': "",
      'sex': "",
      'class': "",
      'level': 4,
      'player_name': "",
      'alignment': "",
      'str': 1,
      'int': 1,
      'wis': 1,
      'dex': 1,
      'con': 1,
      'cha': 1
  })

  //this is use setFormChara and add the new shit
  const handleChanges = e =>{
    setFormChara({...formChara, [e.target.name]: e.target.value})
    console.log(e.target.value);
  }

  //this is for onSubmit and also uses setFormChara
  const submitForm = e =>{
    props.addNewChara(formChara);
  }

  console.log("form chara from pcs", formChara);


  return(
    <div className="selection-sheet">
      <header>
        <h2>Select options as you want. Fields left blank will be randomly generated for you!</h2>
      </header>
      {/*<div className="generator-buttons">
        <button>Fully Randomly Generate Character?</button>
  </div>*/}
      <div className="generator-form options">
        <form>
          <label htmlFor="sex">Sex, yes please!</label>
          <section>
            <input type="radio" name="sex" id="female" value="f"/>
            <label htmlFor="female">Female</label>
            <input type="radio" name="sex" id="male" value="m"/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="sex" id="random" value="r"/>  
            <label htmlFor="random">Random</label>
          </section>
          <label htmlFor="dnd-class">Class</label>
          <select name="dnd-class" id="dnd-class">
            <option value="null!!">Select a class!</option>
            {dndClassHolder.map((dndClass)=>{
              return(
              <option>{dndClass.name}</option>
              )
            })}
            <option value="random">Random</option>
          </select>
          <label htmlFor="dnd-race">Race</label>
            {/*Drop Down*/}
          <select name="dnd-race" id="dnd-race">
            <option value="null!!">Select a Race!</option>
            {raceHolder.map((dndRace)=>{
              return(
                <option value={dndRace.name}>{dndRace.name}</option>
              )
            })}
            <option value="random">Random</option>
          </select>
          <label htmlFor="player-level">Level</label>
            {/*number input max 20 with a default of 1*/}
          <input
          className="chara-level"
          type="number"
          id="player-level"
          name="player-level"
          min="1"
          max="20"
          />
          <label>Alignment</label>
            {/*Drop Down*/}
          <select name="dnd-alignment" id="dnd-alignment">
            <option value="null!!">Choose Your Alignment!</option>
            {charaAlign.map((align) =>{
              return(
              <option value={align.name}>{align.name}</option>
              )
            })}
            <option value="tba">Decide Later</option>
            <option value="random">Random</option>
          </select>
          <label>Explanation</label>
            {/*Div/paragraph with an explanation for each alignment*/}
          {charaAlign.map((sum)=>{
            return(
            <p className="align-sum">{sum.summary}</p>
            )
          })}
          <Link to="/final"><button type="submit">Submit</button></Link>
          <button>Reset</button>
        </form>
      </div>
      <Link to="/"><button>Start Over</button></Link>
    </div>
  )
}

export default PotentialCharaSheet;
