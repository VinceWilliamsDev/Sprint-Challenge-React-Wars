import React from "react"
import Character from "./Character"

const CharactersContainer = (props) => {
    // console.log(props) //gets charactersData -> array of 10 characters
    const { charactersData } = props
    // console.log(charactersData)
    return (
        <div>
            {/* mapping through charaters to create the tiles*/}
            {charactersData.map((character, index) => {
                return <Character key={index} character={character}/>
            })}
        </div>
    )
}

export default CharactersContainer