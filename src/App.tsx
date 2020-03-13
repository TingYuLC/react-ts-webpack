import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home, MovieDetail, Theme, Header, Login,
} from '@/pages';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/movie">
        <Home />
      </Route>
      <Route path="/movie/movie-detail/:id">
        <MovieDetail />
      </Route>
      <Route path="/movie/theme">
        <Theme />
      </Route>
    </Switch>
  </div>
);

export default App;
