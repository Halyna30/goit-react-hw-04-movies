import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import axios from 'axios';
import Cast from '../Components/Cast';
import Reviews from '../Components/Reviews';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=cbf7b4582ce31cf384dd80d27cc60e4c&language=en-US`,
    );
    this.setState({ movie: response.data, genres: response.data.genres });
  }

  render() {
    const { title, vote_average, overview, poster_path } = this.state.movie;

    return (
      <>
        <NavLink to="/">go back</NavLink>
        <img src={poster_path} alt="poster" />
        <h2>{title}</h2>
        <p>Оцінка глядача: {vote_average}</p>
        <p>Overview {overview}</p>
        <h3>Genres </h3>
        <ul>
          {this.state.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <ul>
          <NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink>
          <NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink>
        </ul>
        <Route path={`${this.props.match.path}/cast`} component={Cast} />
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
