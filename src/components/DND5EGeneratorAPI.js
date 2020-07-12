import React, {useState, useEffect} from "react";
import axios from "axios";
import PotentialCharaSheet from "./PotentialCharaSheet.js";

const DNDGenerator = props =>{
  const [dndClass, setDndClass] = useState({})

  useEffect(() =>{
    axios
    .get(`https://www.dnd5eapi.co/api`)
      .then(res =>{
        console.log("this is the response", res.data);
      })
      .catch(err =>{
        console.log("this is the error", err);
      })
  }, []);

  return null;
}
export default DNDGenerator;
