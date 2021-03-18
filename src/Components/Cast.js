import React, { Component } from 'react';
import axios from 'axios';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=cbf7b4582ce31cf384dd80d27cc60e4c&language=en-US`,
    );

    this.setState({ cast: data.cast });
  }

  render() {
    const { cast } = this.state;
    return (
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img src={item.profile_path} alt="actor" />
            <h3>{item.name}</h3>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
