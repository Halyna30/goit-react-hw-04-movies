import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import fetch from '../../services/restApi';
import PropTypes from 'prop-types';

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

    fetch
      .fetchSearch(this.state.query)
      .then(({ data }) => this.setState({ movies: data.results }));
  };

  render() {
    const { movies, query } = this.state;
    const { location } = this.props;

    return (
      <>
        <form onSubmit={this.handlerSubmit}>
          <input type="text" onChange={this.inputChange} value={query} />
          <button type="submit">search</button>
        </form>
        {movies && (
          <ul>
            {movies.map(movie => (
              <li>
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}/${movie.id}`,
                    state: { from: location },
                  }}
                >
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

MoviesPage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default withRouter(MoviesPage);
