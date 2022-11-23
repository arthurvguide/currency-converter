import React,{useEffect, useState} from "react"; 
import './App.css';

const App = () => {

  const APP_ID = '08bbca50'
  const APP_KEY = '57c0e643eb291df752379dcdd88bf5d7'

  useEffect( () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch('https://api.npms.io/v2/search?q=react');
    const data = response.json();
    console.log(data);

  }

  return(
    <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"></input>
          <button className="search-btn" type="submit">search
          </button>
        </form>
    </div>
  );
};

export default App;
