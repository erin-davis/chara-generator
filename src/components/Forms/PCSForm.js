//this one takes the form from potentialCharaSheet.js and matches it with NoteForm.js
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {raceHolder, dndClassHolder, charaAlign} from "../../data/APIPlaceHolder.js";

const PCSForm = props =>{
  const [formInputs, setFormInputs] = useState({
    player_name: "",
    character_name: "",
    dnd_class: "",
    dnd_alignment: "",
    sex: "",
    dnd_race: ""
  });

  const handleChanges = e =>{
    setFormInputs({...formInputs, [e.target.name]: [e.target.value]});
    console.log("this is target value", e.target.value);
    console.log("this is target.name: ", e.target.name);
  }

  const submitForm = e =>{
    e.preventDefault();
    props.addNewChara(formInputs);
    setFormInputs({
      player_name: "",
      character_name: "",
      dnd_class: "",
      dnd_alignment: "",
      sex: "",
      dnd_race: "",
      chara_level: ""
    })
  };

  return(
    <form onSubmit={submitForm}>
      <label htmlFor="sex">Sex, yes please!</label>
          <section>
            <input type="radio" name="sex" id="female" value="Female" onChange={handleChanges}/>
            <label htmlFor="female">Female</label>
            <input type="radio" name="sex" id="male" value="Male" onChange={handleChanges}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="sex" id="random" value="Other" onChange={handleChanges}/>  
            <label htmlFor="random">Other</label>
          </section>
          <label htmlFor="dnd_class">Class</label>
          <select name="dnd_class" id="dnd_class" onChange={handleChanges}>
            <option value="null!!">Select a class!</option>
            {dndClassHolder.map((dndClass)=>{
              return(
              <option value={dndClass.name}>{dndClass.name}</option>
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
          <label htmlFor="chara_level">Level</label>
            {/*number input max 20 with a default of 1*/}
          <input
          className="chara-level"
          type="number"
          id="chara_level"
          name="chara_level"
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
          <button type="submit" onSubmit={submitForm}>Next</button>
          <button type="reset">Reset</button>
    </form>
  );
};

export default PCSForm;