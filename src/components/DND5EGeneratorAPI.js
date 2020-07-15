import React, {useState, useEffect} from "react";
import axios from "axios";
import PotentialCharaSheet from "./PotentialCharaSheet.js";

const DNDGenerator = props =>{
  const [dndClass, setDndClass] = useState({})
  //const [dndValues, setDndValues] = useState([]);
  const [dndRes, setDndRes] = useState({});
  const [apiValues, setApiValues] = useState([]);

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

  useEffect(() =>{
    axios
    .get(`https://www.dnd5eapi.co/api`)
      .then(res =>{
        setApiValues(Object.values(res.data));
        console.log("this is the response", res.data);
      })
      .catch(err =>{
        console.log("this is the error", err);
      })
    // axios
    // .get(`https://www.dnd5eapi.co${apiValues.map(() =>{
    //   return `${apiValues}`
    // })}`)
    //     .then(res =>{
    //       console.log('this is from the second api call', res);
    //     })
    //     .catch(err =>{
    //       console.log('from the second api call, i messed up like this: ', err);
    //     })
  }, []);

  return null;
}
export default DNDGenerator;
