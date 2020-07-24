import React from 'react';
import './App.css';
import Routes from "./components/Routes.js";
import DNDGenerator from "./components/DND5EGeneratorAPI.js";
import NameAPIGen from "./components/NameGeneratorAPI.js";

//DNDGenerator is just ot check my API responses



function App() {
  return (
    <div className="App">
    <NameAPIGen />
    <DNDGenerator />
    <Routes/>
    </div>
  );
}

export default App;
