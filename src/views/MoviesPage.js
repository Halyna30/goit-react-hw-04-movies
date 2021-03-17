import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  inputChange = e => {
    const value = e.currentTarget.value;

    this.setState({ query: value });
  };

  handlerSubmit = e => {
    e.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=cbf7b4582ce31cf384dd80d27cc60e4c&language=en-US&query=${this.state.query}&page=1&include_adult=true`,
      )
      .then(response => this.setState({ movies: response.data.results }));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handlerSubmit}>
          <input
            type="text"
            onChange={this.inputChange}
            value={this.state.query}
          />
          <button type="submit">search</button>
        </form>
        {this.state.movies && (
          <ul>
            {this.state.movies.map(movie => (
              <li>
                <NavLink to={`${this.props.match.url}/${movie.id}`}>
                  {movie.original_title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
