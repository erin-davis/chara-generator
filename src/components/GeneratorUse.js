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

//new goal, in css, display none the p but then when its hovered, display inline block

  return (
    <div className="generator-use">
        <header>
          <h1>What do you want to create?</h1>
        </header>
      <div className="creation-use">
          <section className="NPC" onClick={toFinal}>
            <h2>Non-Player Character</h2>
            <p className="NPC-gen-desc">This will bring you to a fully randomly generated character!</p>
          </section>
          <section className="PC" onClick={toSelect}>
            <h2>Player Character</h2>
            <p className="PC-gen-desc">This will allow you to have a more indepth character creation experience! You can pick and choose data you want your character to keep.</p>
          </section>
        </div>
        <div className="pick-use">
          {/*<UseCard />*/}
        </div>
    </div>
  );
}

export default GeneratorUse;
