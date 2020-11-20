import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {abilityScoreHolder as ASH} from "../data/APIPlaceHolder";
import {upArrow, downArrow} from "../tabler-icons/icons.js"
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
    <div className="ability-score-container">
      <form onSubmit={submitForm} onReset={resetForm}>
      <h2>Input the ability scores you're looking for!</h2>
        {ASH.map((ability)=>{
          return(
            <div className="ability-scores">
              <h2>{ability.name}</h2>
              <div className="scores" max='20'><h3>{inputNumbers[ability.index] }
              ({Math.floor((inputNumbers[ability.index] - 10) / 2)})
              </h3>
              </div>
              <span className="arrow-container" >
              <button
              className="bttn"
              name={ability.index}
              onClick={increaseScore}
              >
                <i className="up-arrow" alt={`Up Arrow to Increase ${ability.name}`}>{upArrow}</i>
            </button>
            </span>
            <span className="arrow-container">
              <button
              className="bttn"
              name={ability.index}
              onClick={decreaseScore}
              >
                <i className="down-arrow" alt={`Down Arrow to decrease ${ability.name}`}>{downArrow}</i>
              </button>
              </span>
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