import React from "react";
import {Link} from "react-router-dom";

const FinalCharaSheet = () =>{


  return(
    <div className="final-page">
      <h1>This is the final page! We did it!!! Here's how your Character looks :)</h1>
      <section className="chara-attributes">
        <h2>Name: props.name</h2>
        <h2>Class: </h2>
        <h2>Level: </h2>
        <h2>Player Name:</h2>
        <h2>Alignment: </h2>
      </section>
      <section>
        <h2>STR</h2>
        <h2>INT</h2>
        <h2>WIS</h2>
        <h2>DEX</h2>
        <h2>CON</h2>
        <h2>CHA</h2>
      </section>
      <Link to="/"><button>Start Over</button></Link>
    </div>
  )
}

export default FinalCharaSheet;
