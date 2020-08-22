import React from "react";
import {Link} from "react-router-dom";
import {racesPlaceHolderArr} from "../data/APIPlaceHolder.js";
//url is /selection

const PotentialCharaSheet = (props) =>{
  console.log("from inside pcs", racesPlaceHolderArr);

  const genderSelection = e =>{
    e.preventDefault();
    //maybe toggle to add class toggled or somethign
  }

  console.log("hello");

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
          <label>Sex, yes please!</label>
          <button onClick={genderSelection}>Male</button>
          <button onClick={genderSelection}>Female</button>
          <label htmlFor="dnd-class">Class</label>
          <select name="dnd-class" id="dnd-class">
            <option>Select a class!</option>
            {/*racesPlaceHolderArr.map((dndClass) =>{
              console.log(dndClass["name"]);
              return (
                <option>hello {dndClass["name"]}</option>
              );
            })*/}
          </select>
          <label htmlFor="dnd-race">Race</label>
            {/*Drop Down*/}
          <select name="dnd-race" id="dnd-race">
            <option>Dragonborn</option>
            <option>Dwarf</option>
            <option>Elf</option>
            <option>Gnome</option>
            <option>Half-Elf</option>
            <option>Half-Orc</option>
            <option>Halfling</option>
            <option>Human</option>
            <option>Tiefling</option>
          </select>
          <label>Level</label>
            {/*number input max 20*/}
          <label>Alignment</label>
            {/*Drop Down*/}
          <label>Explanation</label>
            {/*Div/paragraph with an explanation for each alignment*/}
          <textarea />
          <Link to="/final"><button type="submit">Submit</button></Link>
          <button>Reset</button>
        </form>
      </div>
      <Link to="/"><button>Start Over</button></Link>
    </div>
  )
}

export default PotentialCharaSheet;
