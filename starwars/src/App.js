import React, {useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
import CharactersContainer from "./CharactersContainer"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charatersData, setCharactersData ] = useState([])
  // console.log(charatersData)

  //gets first 10 characters from swapi
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/") 
      .then(res => {
        // console.log(res)
        setCharactersData(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharactersContainer charactersData={charatersData}/>
    </div>
  );
}

export default App;
