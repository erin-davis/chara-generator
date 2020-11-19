import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Link, Switch, useHistory} from "react-router-dom";
import {fetchClassData, fetchRaceData, fetchNameList} from "../api";
import {charaAlign, abilityScoreHolder as ASH} from "../data/APIPlaceHolder";
import "../styles/genUse.css"
//url is /use

const GenUse = (props) =>{
  const history = useHistory();
  const toFinal = () =>{
    history.push('/final');
  }
  const toSelect = () =>{
    history.push('/selection');
  }

  const [fullForm, setFullForm] = useState({
    character_name: "",
    dnd_class: "",
    dnd_alignment: "",
    sex: "",
    dnd_race: "",
    chara_level: "",
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    cha: 10,
    wis: 10
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

  //I will admit, this is about the be the ugliest code ever but it works so I can refine it once I finish my portfolio site
  const randomizeForm = () =>{
    const randomizingFunction = (array, objKey, min) =>{
      let max = array.length;
      let arrIndex = Math.floor(Math.random() * (max-min) + min);
      array[arrIndex].name ? fullForm[objKey] = array[arrIndex].name : fullForm[objKey] = array[arrIndex];
    }

    fullForm.chara_level = 1;
    const randomSex = () =>{
      let sexArray = ["Male", "Female", "Other"];
      let arrIndex = Math.floor(Math.random() * 3);
      fullForm.sex = sexArray[arrIndex];
    }

    //for the ability scores!
      ASH.map((score) =>{
        fullForm[score.index] = Math.floor(Math.random() * (20 - 4) + 5);
      })


    randomizingFunction(dndRaceData, "dnd_race", 1);
    randomizingFunction(dndClassData, "dnd_class", 1);
    randomizingFunction(randomNameData, "character_name", 0);
    randomizingFunction(charaAlign, "dnd_alignment", 1);
    randomSex();
    props.addNewChara(fullForm);
    props.addNewDndStats(fullForm);
    toFinal();
  }

  return(
    <div className="gen-use">
      <header>
        <h1>What do you want to create?</h1>
      </header>
      <div className="creation-use">
        <section className="NPC" onClick={randomNameData.length > 0 ? randomizeForm : <p>Try again!</p>}>
          <h2>Non-Player Character</h2>
          <p className="NPC-gen-desc">This will bring you to a fully randomly generated character! You won't be allowed to choose anything specific about this character. Use this one if you just want to make characters quickly!</p>
          <p className="NPC-gen-desc">(At present, this only works with level one characters)</p>
        </section>
        <section className="PC" onClick={toSelect}>
          <h2>Player Character</h2>
          <p className="PC-gen-desc">This will allow you to have a more indepth character creation experience! You can pick and choose information and stats you want your character to have.</p>
        </section>
        </div>
    </div>
  )
}

export default GenUse;