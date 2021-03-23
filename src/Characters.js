import React from 'react'


function Characters(props) {
    return(
        <div className="characters">
            <h3>{props.name}</h3>
            <h4>{props.gender}</h4>
            <p>Age: {props.age}</p>
        </div>
    )
}



export default Characters;