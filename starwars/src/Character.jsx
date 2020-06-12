import React from "react"
import {FlexContainer, CharacterStyles} from "./ComponentStyles"


const Character = (props) => {
    // console.log(props)
    const {character} = props
    // console.log(character)
    const {name, birth_year} = character

    return (
        <FlexContainer>
            <CharacterStyles>{name}</CharacterStyles>
            <CharacterStyles>Birth Date: {birth_year}</CharacterStyles>
        </FlexContainer>
    )
}

export default Character