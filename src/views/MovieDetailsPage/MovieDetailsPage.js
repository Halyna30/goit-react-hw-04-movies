import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../../Components/Cast/Cast';
import Reviews from '../../Components/Reviews/Reviews';
import s from './MovieDetailsPage.module.css';
import fetch from '../../services/restApi';
import PropTypes from 'prop-types';
import routes from '../../routes';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    genres: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { data } = await fetch.fetchMovie(movieId);
    this.setState({ movie: data, genres: data.genres });
  }
  handlerGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { title, vote_average, overview, poster_path } = this.state.movie;
    const { url, path } = this.props.match;

    return (
      <>
        <button type="button" onClick={this.handlerGoBack}>
          go back
        </button>
        <section className={s.movie}>
          <img
            className={s.poster}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="poster"
          />
          <div className={s.description}>
            <h2>{title}</h2>
            <p>User score: {vote_average}</p>
            <h2>Overview </h2>
            <p>{overview}</p>
            <h3>Genres </h3>
            <ul className={s.listGenre}>
              {this.state.genres.map(genre => (
                <li key={genre.id} className={s.itemGenre}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ul className={s.listLink}>
          <NavLink
            to={`${url}/cast`}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Cast
          </NavLink>
          <NavLink
            to={`${url}/reviews`}
            className="navLink"
            activeClassName="navLinkActive"
          >
            Reviews
          </NavLink>
        </ul>
        <Route path={`${path}/cast`} component={Cast} />
        <Route path={`${path}/reviews`} component={Reviews} />
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  url: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  movieId: PropTypes.string.isRequired,
};

export default MovieDetailsPage;
