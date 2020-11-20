import React, { useState } from 'react'
import {Link, useHistory} from "react-router-dom";
import "../styles/welcomePage.css";

//url is base /

const WelcomePage = (props) =>{
  const [playerName, setPlayerName] = useState({
    player_name: ""
  })

  const history = useHistory();

  const toUse = () =>{
    history.push('/use');
  }

  const handleChanges = e =>{
    setPlayerName({...playerName, [e.target.name]: [e.target.value]});
  }

  const submitForm = e =>{
    e.preventDefault();
    props.addNewPlayerName(playerName);
    setPlayerName({
      player_name: ""
    })
    toUse();
  }

  return(
    <div className="landing-page">
        <header>
        <h1>Welcome to an Interactive Character Generator</h1>
        </header>
        <section>
        <p>This character generator is build with Dungeons and Dragons 5th Edition in mind. It can also be used for making random characters as well if you desire. I can't stop you from doing what you want. If you want to the Github repository for this web application, {<a href="https://github.com/erin-davis/chara-generator" target="_blank">click here</a>}!</p>
        </section>
        <section>
        <h2>Ready to go?</h2>
        <form onSubmit={submitForm}>
          <label htmlFor="player_name">Your Name: </label>
          <input
            type="text"
            name="player_name"
            id="player_name"
            value={playerName.player_name}
            placeholder="Player Name"
            onChange={handleChanges}
          />
        </form>
        <button type='submit' onClick={submitForm}>Start</button>
      </section>
    </div>
  )

}

export default WelcomePage;