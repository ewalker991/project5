import './App.css';
import React, { Component } from 'react'
import Movie from "./Movie";
import Characters from "./Characters"

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      movies: [],
      moviesActive: true,
      people: [],
      peopleActive: false,
    }
  }

  componentDidMount() {
    let moviesUrl = "https://ghibliapi.herokuapp.com/films"
    fetch(moviesUrl)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({ movies: data })
        // console.log(this.state.movies[0].title)
      })

    let peopleUrl = "https://ghibliapi.herokuapp.com/people";
    fetch(peopleUrl)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({ people: data })
        // console.log(this.state.people)
      })
  }

  moviesOn = () => {
    this.setState({
      moviesActive: true,
      peopleActive: false
    })
  }
  peopleOn = () => {
    this.setState({
      moviesActive: false,
      peopleActive: true
    })
  }


  render() {
    return (
      <div className="App">
        <h1><img className="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="Studio Ghibli"></img></h1>

        <div className="tabbed-content">
          <ul className="tabs">
            <li onClick={this.moviesOn}>Movies</li>
            <li onClick={this.peopleOn}>Characters</li>

          </ul>

          {this.state.movies.map(movie => {
            if (this.state.moviesActive) {
              return (
                <div className="panel active" id="movies">
                  <Movie {...movie} />
                </div>
              )
            }
          })}

          {this.state.people.map(character => {
            if (this.state.peopleActive) {
              return (
                <div className="panel active" id="characters">
                  <Characters {...character} />
                </div>
              )
            }
          })}

        </div>
      </div>
    )
  }
}

export default App;
