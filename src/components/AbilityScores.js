import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {abilityScoreHolder as ASH} from "../data/APIPlaceHolder";
import "../styles/abilityScores.css"

const AbilityScore = props =>{
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
    if(inputNumbers[e.target.name] > 19){
      alert("Sorry, this is the highest you can go!");
      setInputNumbers({
        ...inputNumbers, [e.target.name]: 20
      });
    }
  };

  const decreaseScore = e =>{
    e.preventDefault();
    setInputNumbers({
      ...inputNumbers,
      [e.target.name]: inputNumbers[e.target.name] - 1
    });
    if(inputNumbers[e.target.name] < 6){
      alert("Sorry, you can't go any lower than this!");
      setInputNumbers({
        ...inputNumbers, [e.target.name]: 5
      });
    }
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

  const resetForm = e =>{
    alert('The numbers will be reset now.');
    setInputNumbers({
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      cha: 10,
      wis: 10
    })
  }

  return (
    <div className="ability-score">
      <header>
        <h2>Either randomly roll for your ability scores or use the calculator to input the scores you're looking for!</h2>
      </header>
      <form onSubmit={submitForm} onReset={resetForm}>
        {ASH.map((ability)=>{
          return(
            <div className="ability-scores">
              <h2>{ability.name}</h2>
              <div className="scores" max='20'><h3>{inputNumbers[ability.index] }
              ({Math.floor((inputNumbers[ability.index] - 10) / 2)})
              </h3>
              </div>
              <div className="arrow-buttons-container">
              <button
              className="bttn-down bttn arrw down"
              name={ability.index}
              onClick={decreaseScore}
              >
              </button>
              <button
              className="bttn-up bttn arrw up"
              name={ability.index}
              onClick={increaseScore}
              >
            </button>
            </div>
            </div>
          )
        })}
      <div className='buttons-container'>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
      </form>
    </div>
  );

}

export default AbilityScore;