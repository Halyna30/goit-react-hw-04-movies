import React, { Component } from 'react';
import axios from 'axios';

class Cast extends Component {
  state = {
    cast: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=cbf7b4582ce31cf384dd80d27cc60e4c&language=en-US`,
    );

    this.setState({ cast: response.data });
  }

  render() {
    return <h1>Actors</h1>;
  }
}

export default Cast;