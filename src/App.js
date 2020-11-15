import React from 'react';
import './App.css';
import Routes from "./components/Routes.js";
import {fetchClassData, fetchLanguageData, fetchRaceData} from "./api";

//DNDGenerator is just ot check my API responses

export default class App extends React.Component{
  constructor(){
    super();
  }
  async componentDidMount(){
    const fetchedClassData = await fetchClassData();
    const fetchedLanguageData = await fetchLanguageData();
    const fetchedRaceData = await fetchRaceData();
    // console.log("from app.js component: ", fetchedData);
  }

  render(){
    return(
      <div className="App">
        <Routes />
      </div>
    )
  }
}