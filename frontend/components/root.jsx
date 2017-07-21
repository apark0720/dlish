import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Home from './home/home';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from './modal/modal_container';

const Root = ({ store }) => (
  <Provider store={ store } >
    <HashRouter>
      <section>
        <Switch>
          <Route exact path="/"
            component={Home}/>
        </Switch>
        <ModalContainer />
      </section>
    </HashRouter>
  </Provider>
);

// <Route render={() => <Redirect to="/" />} />

export default Root;
