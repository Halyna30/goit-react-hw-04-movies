import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cbf7b4582ce31cf384dd80d27cc60e4c&language=en-US`,
    );
    this.setState({ movie: response.data });
  }

  render() {
    const { title, vote_average, overview, id } = this.state.movie;
    return (
      <>
        <h1>MovieDetailsPage</h1>
        <h2>{title}</h2>
        <p>Оцінка глядача: {vote_average}</p>
        <p>Overview {overview}</p>
        <ul>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </ul>
      </>
    );
  }
}

export default MovieDetailsPage;
