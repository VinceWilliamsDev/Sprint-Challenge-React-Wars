import React from "react"

const Character = (props) => {
    // console.log(props)
    const {character} = props
    // console.log(character)
    const {name, birth_year} = character

    return (
        <div>
            <span>{name}</span>
            <span>{birth_year}</span>
        </div>
    )
}

export default Character