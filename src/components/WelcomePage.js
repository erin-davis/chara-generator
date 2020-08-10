import React from "react";
import {Link} from "react-router-dom";

const WelcomePage = () =>{

  //onclick for the button will take them to GeneratorUse

  return(
    <div className="landing-page">
      <header>
        <h2>Welcome to an Interactive Character Generator</h2>
        <p>This character generator is build with both Dungeons and Dragons 5th Edition and Pathfinder in mind. It can also be used for making just random characters too as you desire. I can't stop you from doing what you want. If you want to the Github repository for this web application, click here!</p>
      </header>
      <section>
        <h2>Ready to get started?</h2>
        <Link to="/use"><button>Start</button></Link>
      </section>
    </div>
  )
}

export default WelcomePage;
