import React, { Component } from 'react';
import s from './Cast.module.css';
import fetch from '../../services/restApi';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { data } = await fetch.fetchCast(movieId);

    this.setState({ cast: data.cast });
  }

  render() {
    const { cast } = this.state;
    return (
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt="actor"
              className={s.img}
            />
            <h3>{item.name}</h3>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
