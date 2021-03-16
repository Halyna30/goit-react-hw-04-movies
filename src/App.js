import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Cast from './views/Cast';
import Reviews from './views/Reviews';
import NotFoundPage from './views/NotFoundPage';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />

      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
