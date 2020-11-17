//this one takes the form from potentialCharaSheet.js and matches it with NoteForm.js
import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import {fetchClassData, fetchLanguageData, fetchRaceData} from "../../api";
import {charaAlign} from "../../data/APIPlaceHolder"

const PCSForm = props =>{
  const history = useHistory();

  const toAbScores = () =>{
    history.push('/ability-scores');
  }

  const [formInputs, setFormInputs] = useState({
    player_name: "",
    character_name: "",
    dnd_class: "",
    dnd_alignment: "",
    sex: "",
    dnd_race: "",
  });

  const [dndClassData, setDndClassData] = useState([]);
  const [dndLanguageData, setDndLanguageData] = useState([]);
  const [dndRaceData, setDndRaceData] = useState([]);

  useEffect(()=>{
    const fetchClasses = async () =>{
      setDndClassData(await fetchClassData());
      setDndLanguageData(await fetchLanguageData());
      setDndRaceData(await fetchRaceData());
    }
    fetchClasses();
  }, []);

  const handleChanges = e =>{
    setFormInputs({...formInputs, [e.target.name]: [e.target.value]});
    // console.log("this is target value", e.target.value);
    // console.log("this is target.name: ", e.target.name);
  }

    //this is about to be the worst series of code don't @ me
  //this is for the randomize button to work and then bring that data to the ending character sheet.
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
    toAbScores();
  };


  return(
    <form onSubmit={submitForm}>
      <label htmlFor="sex">Sex, yes please!</label>
          <section>
            <input type="radio" name="sex" id="female" value="Female" onChange={handleChanges}/>
            <label htmlFor="female">Female</label>
            <input type="radio" name="sex" id="male" value="Male" onChange={handleChanges}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="sex" id="other" value="Other" onChange={handleChanges}/>  
            <label htmlFor="other">Other</label>
          </section>
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
          <div className="dnd-languages-container">
          <h3>Languages</h3>
          {dndLanguageData.length > 0 ? (dndLanguageData.map((dndLang, i)=>{
            return(
              <span>
              <input
                type="checkbox"
                id={dndLang.index}
                name={dndLang.index}
                value={dndLang.name}
                />
            <label htmlFor={dndLang.index}>{dndLang.name}</label>
            </span>
            )
          })) : <p>Loading...</p>
        }
          </div>
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
          <label>Alignment</label>
          <select name="dnd_alignment" id="dnd_alignment" onChange={handleChanges}>
            <option value="">Choose Your Alignment!</option>
            {charaAlign.map((align) =>{

              return(
              <option value={align.name}>{align.name}</option>
              )
            })}
            <option value="tba">Decide Later</option>
            <option value="random">Surprise Me!</option>
          </select>
          <label>Explanation</label>
          {charaAlign.map((sum)=>{
            return(
            <p className="align-sum">{sum.summary}</p>
            )
          })}
          <button type="submit">Next</button>
          <button type="reset">Reset</button>
    </form>
  );
};

export default PCSForm;