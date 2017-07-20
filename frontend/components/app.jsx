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
import SessionFormContainer from './header/session_form/session_form_container';
import ModalStructure from './header/modal/modal_structure';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/">
      </Link>
      <NavBarContainer />
    </header>
    <ModalContainer />

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
