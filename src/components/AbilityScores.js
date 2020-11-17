import React, {useState} from "react";
import {useHistory} from "react-router-dom";
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
  const history = useHistory();

  const toFinal = () =>{
    history.push('/final');
  }

  const [inputNumbers, setInputNumbers] = useState({
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    cha: 10,
    wis: 10
  });

  const increaseScore = e =>{
    e.preventDefault();
    setInputNumbers({
      ...inputNumbers,
      [e.target.name]: inputNumbers[e.target.name] + 1
    });
  };

  const decreaseScore = e =>{
    e.preventDefault();
    setInputNumbers({
      ...inputNumbers,
      [e.target.name]: inputNumbers[e.target.name] - 1
    });
    console.log('score down')
  }

  const randomDice = e =>{
    // e.preventDefault();
    console.log('all numbers should randomize');
    
  }

  const submitForm = e =>{
    e.preventDefault();
    props.addNewDndStats(inputNumbers);
    setInputNumbers({
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      cha: 10,
      wis: 10
    });
    toFinal();
  }


  return (
    <div className="ability-score">
      <header>
        <h2>Either randomly roll for your ability scores or use the calculator to input the scores you're looking for!</h2>
      </header>
      <form onSubmit={submitForm}>
        {ASH.map((ability)=>{
          return(
            <article className="ability-score">
              <h2>{ability.name}</h2>
              <button
              className="bttn-down bttn arrw down"
              name={ability.index}
              onClick={decreaseScore}
              >
                down
              </button>
              <span className={`${ability.index}_mod`} max='20'><h3>{inputNumbers[ability.index] }
              (Modifier: {Math.floor((inputNumbers[ability.index] - 10) / 2)})
              </h3>
              </span>
              <button
              className="bttn-up bttn arrw up"
              name={ability.index}
              onClick={increaseScore}
              >
                up
            </button>
            </article>
          )
        })}
      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
      </form>
      <div className="random-dice-container">
        <div className="random-dice" onClick={randomDice}>
          <button>Roll to Randomize</button>
        </div>
      </div>
    </div>
  );
}

export default AbilityScore;