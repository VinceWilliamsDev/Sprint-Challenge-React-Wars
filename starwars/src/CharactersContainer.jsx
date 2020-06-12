import React from "react"
import Character from "./Character"

const CharactersContainer = (props) => {
    console.log(props) //gets CharactersData -> array of 10 characters

    return (
        <div>
            <Character />
        </div>
    )
}

export default CharactersContainer