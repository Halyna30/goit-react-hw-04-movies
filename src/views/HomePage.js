import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import s from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=cbf7b4582ce31cf384dd80d27cc60e4c',
    );
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
