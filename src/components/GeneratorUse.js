import React from "react";
import {Link} from "react-router-dom";
import UseCard from "./UseCard.js";

const GeneratorUse = () =>{

  const sectionSelect = e =>{
    e.preventDefault();
  }

  return (
    <div className="generator-use">
      <div className="creation-use">
        <header>
          <h1>What do you want to create?</h1>
        </header>
        <Link to="/final">
          <section className="NPC">
            <h2>Non-Player Character</h2>
            <p>This will allow you to immediately generate a character</p>
          </section>
        </Link>
          <section className="PC">
            <h2>Player Character</h2>
            <p>This will allow you to have a more indepth character creation experience!</p>
          </section>
        </div>
        <div className="pick-use">
          <UseCard />
        </div>
    </div>
  );
}

export default GeneratorUse;
