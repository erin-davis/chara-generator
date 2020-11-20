import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import {fetchClassData, fetchRaceData, fetchNameList} from "../api";
import {charaAlign} from "../data/APIPlaceHolder";
import "../styles/dynamicSheet.css"

const DynamicSheet = props =>{
  const history = useHistory();

  const toScore = () =>{
    history.push('/ability-scores');
  }

  const [formInputs, setFormInputs] = useState({
    player_name: "",
    character_name: "",
    dnd_class: "",
    dnd_alignment: "",
    sex: "",
    dnd_race: "",
    chara_level: ""
  });

  const [dndClassData, setDndClassData] = useState([]);
  const [dndRaceData, setDndRaceData] = useState([]);
  const [randomNameData, setRandomNameData] = useState({});

  useEffect(()=>{
    const fetchVarious = async () =>{
      setDndClassData(await fetchClassData());
      setDndRaceData(await fetchRaceData());
      setRandomNameData(await fetchNameList());
    }
    fetchVarious();
  }, []);

  const handleChanges = e =>{
    setFormInputs({...formInputs, [e.target.name]: [e.target.value]});
  }


  //this is to randomize for a few of the inputs. It's not super DRY but it works for its purpose
  if(formInputs.dnd_class == "random" || formInputs.dnd_alignment == "random" || formInputs.dnd_race == "random"){
    if(formInputs.dnd_class == 'random'){
      let max = dndClassData.length;
      let randomIndex = Math.floor(Math.random() * (max-1) + 1)
      formInputs.dnd_class = dndClassData[randomIndex].name
    }
    if(formInputs.dnd_race == 'random'){
      let max = dndRaceData.length;
      let randomIndex = Math.floor(Math.random() * (max-1) + 1)
      formInputs.dnd_race = dndRaceData[randomIndex].name
    }
    if(formInputs.dnd_alignment == 'random'){
      let max = charaAlign.length;
      let randomIndex = Math.floor(Math.random() * (max-1) + 1)
      formInputs.dnd_alignment = charaAlign[randomIndex].name
    }
  }

  const submitForm = e =>{
    e.preventDefault();
    props.addNewChara(formInputs);
    setFormInputs({
      player_name: "",
      character_name: "",
      dnd_class: "",
      dnd_alignment: "",
      sex: "",
      dnd_race: "",
      chara_level: ""
    })
    toScore();
  };

  const resetForm = e =>{
    setFormInputs({
      player_name: "",
      character_name: "",
      dnd_class: "",
      dnd_alignment: "",
      sex: "",
      dnd_race: "",
      chara_level: ""
    })
  }

  return(
    <div className="dynamic-sheet">
      <h2>Fill out this form to decide what you want your character to be like.</h2>
      <form onSubmit={submitForm}  onReset={resetForm}>
        <section className="name-choice-container">
          <label>Character Name</label>
          <select name="character_name" id="character_name" onChange={handleChanges}>
            <option value="">Pick a Name!</option>
            {randomNameData.length > 0 ? randomNameData.map((name, index) =>{
              return(
              <option value={name} key={index}>{name}</option>
              )
            }) : null}
          </select>
        </section>
        <section className="form-sex">
          <label>Sex?</label>
          <article>
            <input type="radio" name="sex" id="female" value="Female" onChange={handleChanges}/>
            <label htmlFor="female">Female</label>
            <input type="radio" name="sex" id="male" value="Male" onChange={handleChanges}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="sex" id="other" value="Other" onChange={handleChanges}/>  
            <label htmlFor="other">Other</label>
          </article>
        </section>
        <section className="chara-level">
          <label htmlFor="chara_level">Level</label>
            <input
            className="chara-level"
            type="number"
            id="chara_level"
            name="chara_level"
            min="1"
            max="20"
            onChange={handleChanges}
            />
          </section>
        <section className="dnd-class">
        <label htmlFor="dnd_class">Class</label>
          <select name="dnd_class" id="dnd_class" onChange={handleChanges}>
            <option value="">Select a Class!</option>
            {
            (dndClassData.map((dndClass, i) =>{
              return (
              <option value={dndClass.name} key={i}>{dndClass.name}</option>
              )
            }))}
            <option value="random">Surprise Me!</option>
          </select>
        </section>
        <section className="dnd-race">
          <label htmlFor="dnd_race">Race</label>
          <select name="dnd_race" id="dnd_race" onChange={handleChanges}>
            <option value="">Select a Race!</option>
            {dndRaceData.map((dndRace, i) =>{
              return(
              <option value={dndRace.name} key={i}>{dndRace.name}</option>
              )
            })}
            <option value="random">Surprise Me!</option>
          </select>
        </section>
          <section className="dnd-align">
            <label>Alignment</label>
            {<select name="dnd_alignment" id="dnd_alignment" onChange={handleChanges}>
              <option value="">Choose Your Alignment!</option>
              {charaAlign.map((align) =>{
                return(
                <option value={align.name} id={align.id}>{align.name}</option>
                )
              })}
              <option value="TBA">Decide Later</option>
              <option value="random">Surprise Me!</option>
            </select>}
          </section>
          <section className="buttons">
            <button type="reset">Reset</button>
            <button type="submit">Next</button>
          </section>
      </form>
    </div>
  )

}

export default DynamicSheet;