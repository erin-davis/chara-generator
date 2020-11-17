import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import {fetchNameList} from "../../api";

//this is the file for picking a character name
// /names

const NameChoice = props =>{
  const history = useHistory();
  const toFinal = () =>{
    history.push("/final");
  }

// const [randomNames, setRandomNames] = useState({});

  const fakeArr = ["Emanuel", "Gerhard", "Somporn", "Anoop", "Hulda", "Ginger"];

  // useEffect(()=>{
  //   const fetchNames = async () =>{
  //     setRandomNames(await fetchNameList());
  //   }
  //   fetchNames();
  // }, []);

  // console.log("this is randomNames", randomNames);


  return(
    <div className="name-choice-container">
      <h2>These are 5 random names you can pick through!</h2>
      <form>

      </form>
      {fakeArr.length > 0 ?
      fakeArr.map((name, index) =>{
        return(
        <article key={index} >
        <p>{name}</p>
        </article>
        )
      })  : <p>Loading names...</p>
    }
    <button onClick={toFinal}>Finish!</button>
    </div>
  )
}

export default NameChoice;