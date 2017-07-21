import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBarContainer from './header/nav_bar/nav_bar_container';
import ModalContainer from './header/modal/modal_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" />
      <NavBarContainer />
    </header>

    <Switch>

    </Switch>
    <ModalContainer />
  </div>
);

export default App;
