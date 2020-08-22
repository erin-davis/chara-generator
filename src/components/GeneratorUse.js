import React from "react";
import {BrowserRouter as Router, Link, Switch, useHistory} from "react-router-dom";
import UseCard from "./UseCard.js";
//url is /use

const GeneratorUse = () =>{
  const history = useHistory();

  const sectionSelect = e =>{
    e.preventDefault();
  }
  //i had the create-card sections wrapped in Link from rrd
  const toFinal = () =>{
    history.push('/final');
  }

  const toSelect = () =>{
    history.push('/selection');
  }

  const descEnter = e =>{
    e.target.classList.toggle('active');
  }

  const descLeave = e =>{
    e.target.classList.toggle('active');
  }



  return (
    <div className="generator-use">
        <header>
          <h1>What do you want to create?</h1>
        </header>
      <div className="creation-use">
          <section className="NPC" onMouseEnter={descEnter} onMouseLeave={descLeave} onClick={toFinal}>
            <h2>Non-Player Character</h2>
            <p>This will allow you to immediately generate a character</p>
          </section>
          <section className="PC" onMouseEnter={descEnter} onMouseLeave={descLeave} onClick={toSelect}>
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
