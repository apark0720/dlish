import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Home from './home/home';
import NavBarContainer from './navigation/navbar_container';
import Footer from './home/footer';
import MenuIndexContainer from './recipes/menu_index_container';
import SuggestionIndexContainer from './recipes/suggestion_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from './modal/modal_container';

const Root = ({ store }) => (
  <Provider store={ store } >
    <HashRouter>
      <section>
        <NavBarContainer />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/menu" component={ MenuIndexContainer } />
          <Route path="/suggestions" component={ SuggestionIndexContainer } />
        </Switch>
        <ModalContainer />
        <Footer />
      </section>
    </HashRouter>
  </Provider>
);

export default Root;
