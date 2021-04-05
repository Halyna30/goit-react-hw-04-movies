import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import s from './HomePage.module.css';
import fetch from '../../services/restApi';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const { data } = await fetch.fetchTrend();

    this.setState({ movies: data.results });
  }

  render() {
    const { movies } = this.state;
    const { location } = this.props;
    return (
      <>
        <h1 className={s.title}>Trending today</h1>
        <ul className={s.listMovies}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
                className={s.link}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(HomePage);
