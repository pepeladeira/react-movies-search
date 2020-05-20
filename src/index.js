import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import SearchMovies from "./searchMovie"


class Main extends React.Component {
  render() {
    return (
      <div className="container">  
        <h1 className="title">Movie Search</h1>
        <p className="instructions">Type a movie's name and get some information about it.</p>
        <img className="intro--image" src="./characters.png"></img>
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
