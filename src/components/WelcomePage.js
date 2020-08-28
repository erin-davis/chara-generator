import React, {useState} from "react";
import {Link} from "react-router-dom";
//url is /

/*still have to come up with a way for the player_name to get pushed to the final form as well*/

const WelcomePage = (props) =>{

  //onclick for the button will take them to GeneratorUse
  const [playerName, setPlayerName] = useState({
    'player_name': ""
  })

  const handleChanges = e =>{
    setPlayerName({...playerName, [e.target.name]: e.target.value});
    console.log(e.target.value);
  }

  const submitForm = e =>{
    e.preventDefault();
    console.log("i should totally submit that huh");
    props.addNewChara(playerName);
  }

  return(
    <div className="landing-page">
      <header>
        <h1>Welcome to an Interactive Character Generator</h1>
        </header>
        <section>
        <p>This character generator is build with both Dungeons and Dragons 5th Edition and Pathfinder in mind. It can also be used for making just random characters too as you desire. I can't stop you from doing what you want. If you want to the Github repository for this web application, {<a href="https://github.com/erin-davis/chara-generator" target="_blank">click here</a>}!</p>
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
        <Link to="/use"><button>Start</button></Link>
      </section>
    </div>
  )
}

export default WelcomePage;
