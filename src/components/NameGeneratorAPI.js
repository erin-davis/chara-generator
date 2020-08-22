import React, {useEffect, useState} from "react";
import axios from "axios";

/*
The accepted params for the api json url as as follows:
key (required)
gender=f/m
number=3 max of 6
randomsurname=n pass 'yes' to generate a random surname wh
*/

const NameGenerator = props =>{
  const apiKEY = process.env.REACT_APP_NAME_API_KEY;

  const [apiNames, setApiNames] = useState([])

  // useEffect(()=>{
  //   axios
  //   .get(`https://www.behindthename.com/api/random.json?key=${apiKEY}&number=5&gender=f`)
  //   .then(res =>{
  //     console.log("name api response: ", res.data);
  //   })
  //   .catch(err =>{
  //     console.log("name api error is: ", err);
  //   })
  // }, [])
  return null;
}

export default NameGenerator;
