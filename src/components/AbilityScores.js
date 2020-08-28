import React, {useState} from "react";
import {Link} from "react-router-dom";
import {abilityScoreHolder as ASH} from "../data/APIPlaceHolder";
import {upArrow, downArrow} from "../tabler-icons/icons";

/*
This will be math heavy since I have to do a new page dedicated entirely to the ability scores part.

This will give the user the chance to either input their numbers using the [set point amount] where they subtract total points from that
(with math done for if they're a higher level as well)

There will also be a button that allows for a random dice roll that will put random numbers in each field (maybe not as strictly accounting for level since it's random)

Of course, max number will always be 20
*/

//button w/ class random dice should maybe look like a dice?

const AbilityScore = (props) =>{
  let score = 1;

  const increaseScore = e =>{
    score += 1;
  }

  const decreaseScore = e =>{
    score -= 1;
  }


  return (
    <div className="ability-score">
      <header>
        <h2>Either randomly roll for your ability scores or use the calculator to input the scores you're looking for!</h2>
      </header>
      <div className="score-blocks ">
        {ASH.map((ability)=>{
          return(
          <article className="ash-ability" value={ability.index}>
           <button className="bttn-down bttn" onClick={decreaseScore}>
          <i class="arrw down"></i>
           </button>
          <span className={`${ability.index}_mod`}>{/*This will be mutable and*/score}</span>
           <button className="bttn-up bttn" onClick={increaseScore}>
          <i class="arrw up"></i>
            </button>
          </article>
          )
        })}
        <div className="score-dice">
          <button className="random-dice">Random</button>
        </div>
      </div>
      <button className="as-bttn">Reset</button>
      <Link to="/final"><button type="submit">Submit</button></Link>
    </div>
  );
}

export default AbilityScore;