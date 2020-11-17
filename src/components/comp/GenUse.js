import React from "react";
import {BrowserRouter as Router, Link, Switch, useHistory} from "react-router-dom";
//url is /use

const GenUse = () =>{
  const history = useHistory();

  const toFinal = () =>{
    history.push('/final');
  }

  const toSelect = () =>{
    history.push('/selection');
  }

  return(
    <div className="gen-use">
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
    </div>
  )
}

export default GenUse;