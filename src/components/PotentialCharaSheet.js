import React, {useState} from "react";
import {Link} from "react-router-dom";
import {raceHolder, dndClassHolder, charaAlign} from "../data/APIPlaceHolder.js";
//url is /selection

const PotentialCharaSheet = (props) =>{
//this is the history thing for the submit button

  const [formChara, setFormChara] = useState({
      'name': "",
      'sex': "",
      'dnd_class': "",
      'player_level': "",
      'dnd_race': "",
      'player_name': "",
      'dnd_alignment': "",
      'str': "",
      'int': "",
      'wis': "",
      'dex': "",
      'con': "",
      'cha': ""
  })

  //this is use setFormChara and add the new shit
  const handleChanges = e =>{
    setFormChara({...formChara, [e.target.name]: e.target.value})
    //console.log(e.target.value);
  }

  //this is for onSubmit and also uses setFormChara
  const submitForm = e =>{
    e.preventDefault();
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
        <form onSubmit={submitForm}>
          <label htmlFor="sex">Sex, yes please!</label>
          <section>
            <input type="radio" name="sex" id="female" value="f" onChange={handleChanges}/>
            <label htmlFor="female">Female</label>
            <input type="radio" name="sex" id="male" value="m" onChange={handleChanges}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="sex" id="random" value="r" onChange={handleChanges}/>  
            <label htmlFor="random">Random</label>
          </section>
          <label htmlFor="dnd_class">Class</label>
          <select name="dnd_class" id="dnd_class" onChange={handleChanges}>
            <option value="null!!">Select a class!</option>
            {dndClassHolder.map((dndClass)=>{
              return(
              <option>{dndClass.name}</option>
              )
            })}
            <option value="random">Random</option>
          </select>
          <label htmlFor="dnd_race">Race</label>
            {/*Drop Down*/}
          <select name="dnd_race" id="dnd_race" onChange={handleChanges}>
            <option value="null!!">Select a Race!</option>
            {raceHolder.map((dndRace)=>{
              return(
                <option value={dndRace.name}>{dndRace.name}</option>
              )
            })}
            <option value="random">Random</option>
          </select>
          <label htmlFor="player_level">Level</label>
            {/*number input max 20 with a default of 1*/}
          <input
          className="chara-level"
          type="number"
          id="player_level"
          name="player_level"
          min="1"
          max="20"
          onChange={handleChanges}
          />
          <label>Alignment</label>
            {/*Drop Down*/}
          <select name="dnd_alignment" id="dnd_alignment" onChange={handleChanges}>
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
          <Link to="/final"><button type="submit" onSubmit={submitForm}>Next</button></Link>
          <button type="reset">Reset</button>
        </form>
      </div>
      <Link to="/"><button>Start Over</button></Link>
    </div>
  )
}


export default PotentialCharaSheet;