import React from "react";
import {racesPlaceHolderArr} from "../data/APIPlaceHolder.js";
//url is /selection

const PotentialCharaSheet = (props) =>{

  console.log("from inside pcs", racesPlaceHolderArr);

  const genderSelection = e =>{
    e.preventDefault();
    //maybe toggle to add class toggled or somethign
  }


  return(
    <div>
      <header>
        <h2>Select options as you want. Fields left blank will be randomly generated for you!</h2>
      </header>
      <div className="generator-buttons">
        <button>Fully Randomly Generate Character?</button>
      </div>
      <div className="generator-form options">
        <form>
          <label>Sex, yes please!</label>
          <button onClick={genderSelection}>Male</button>
          <button onClick={genderSelection}>Female</button>
          <label htmlFor="dnd-class">Class</label>
          <select name="dnd-class" id="dnd-class">
            <option>Select a class!</option>
            {/*racesPlaceHolderArr.forEach((dndClass) =>{
              console.log(dndClass["name"]);
              return (
                <option>hello {dndClass["name"]}</option>
              );
            })*/}
            <option>empty</option>
            <option>empty</option>
            <option>empty</option>
            <option>empty</option>
          </select>
          <label>Race</label>
          <label>Level</label>
          <label>Alignment</label>
          <label>Explanation</label>
          <textarea />
          <button type="submit">Submit</button>
          <button>Reset</button>
        </form>
      </div>
    </div>
  )
}

export default PotentialCharaSheet;
