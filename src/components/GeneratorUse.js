import React from "react";
import {BrowserRouter as Router, Link, Switch, useHistory} from "react-router-dom";
import UseCard from "./UseCard.js";

const GeneratorUse = () =>{
  const history = useHistory();

  const sectionSelect = e =>{
    e.preventDefault();
  }
  //i had the create-card sections wrapped in Link from rrd
  const npcSelect = () =>{
    history.push('/final');
  }

  const pcSelect = () =>{
    history.push('/selection');
  }

  let descEnter = e =>{
    e.target.classList.toggle('active');
  }

  let descLeave = e =>{
    e.target.classList.toggle('active');
  }



  return (
    <div className="generator-use">
        <header>
          <h1>What do you want to create?</h1>
        </header>
      <div className="creation-use">
          <section className="NPC" onMouseEnter={descEnter} onMouseLeave={descLeave} onClick={npcSelect}>
            <h2>Non-Player Character</h2>
            <p>This will allow you to immediately generate a character</p>
          </section>
          <section className="PC" onMouseEnter={descEnter} onMouseLeave={descLeave} onClick={pcSelect}>
            <h2>Player Character</h2>
            <p>This will allow you to have a more indepth character creation experience! You can pick and choose data you want your character to keep.</p>
          </section>
        </div>
        <div className="pick-use">
          {/*<UseCard />*/}
        </div>
    </div>
  );
}

export default GeneratorUse;
