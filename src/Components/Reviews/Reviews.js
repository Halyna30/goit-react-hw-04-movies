import React, { Component } from 'react';
import fetch from '../../services/restApi';
import PropTypes from 'prop-types';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const { data } = await fetch.fetchReviews(movieId);

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

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
