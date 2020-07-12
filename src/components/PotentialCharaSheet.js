import React from "react";
//url is /selection

const PotentialCharaSheet = (props) =>{

  console.log("from inside pcs", props);

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
