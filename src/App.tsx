import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home, MovieDetail, Theme, Header,
} from '@/pages';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movie-detail/:id">
        <MovieDetail />
      </Route>
      <Route path="/theme">
        <Theme />
      </Route>
    </Switch>
  </div>
);

export default App;
