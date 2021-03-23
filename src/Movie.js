import React from 'react'


function Movie(props) {
    return(
        <div className="movie">
            <h3>{props.title}</h3>
            <h4>{props.director}</h4>
            <p>{props.description}</p>
        </div>
    )
}



export default Movie;