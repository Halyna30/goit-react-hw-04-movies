import { lazy, Suspense } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import('./views/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

const App = () => (
  <>
    <ul className="mainNav">
      <li>
        <NavLink to="/" className="navLink">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className="navLink">
          Movies
        </NavLink>
      </li>
    </ul>
    <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
