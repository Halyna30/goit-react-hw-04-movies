import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;

// https://api.themoviedb.org/3/movie/550?api_key=cbf7b4582ce31cf384dd80d27cc60e4c
// cbf7b4582ce31cf384dd80d27cc60e4c

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmY3YjQ1ODJjZTMxY2YzODRkZDgwZDI3Y2M2MGU0YyIsInN1YiI6IjYwNTEwMTVjNGNhNjc2MDA2YjgyODA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8c80o7KEU0rT3rFLLBgf-FDXWmv-KuIThqchTeyqPtQ
