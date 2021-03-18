import React, { Component } from 'react';
import axios from 'axios';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=cbf7b4582ce31cf384dd80d27cc60e4c&language=en-US&page=1`,
    );

    this.setState({ reviews: data.results });
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author} </h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <li>we dont have any reviews for this movie</li>
        )}
      </ul>
    );
  }
}

export default Reviews;
