import React, {useState, useEffect} from "react";
import axios from "axios";
import PotentialCharaSheet from "./PotentialCharaSheet.js";

const DNDGenerator = props =>{
  const [dndClass, setDndClass] = useState({})
  //const [dndValues, setDndValues] = useState([]);
  const [dndRes, setDndRes] = useState({});
  const [apiValues, setApiValues] = useState(["/api/classes", "/api/languages", "/api/races"
]);

  // const dndApiData = async () =>{
  //   const dndRes = await axios.get(`https://www.dnd5eapi.co/api`);
  //   setDndRes(dndRes.data);
  //   let dndValues = Object.values(dndRes.data);
  //   console.log(dndRes.data);
  // };
  //
  // useEffect(()=>{
  //   dndApiData();
  // }, [])
// ? `/api/classes` : `/api`

  //two axios calls with the intention of the second one to be able to loop through and get all the information at once?
  //if statement where if apiValues > 1, I do the second api call!!

  // useEffect(() =>{
  //   axios
  //   .get(`https://www.dnd5eapi.co${apiKeys}`)
  //     .then(res =>{
  //       setApiValues(Object.values(res.data));
  //       console.log("this is the response from axios 1", res.data);
  //     })
  //     .catch(err =>{
  //       console.log("this is the error", err);
  //     })
  //   }, []);


  return null;
}
export default DNDGenerator;
