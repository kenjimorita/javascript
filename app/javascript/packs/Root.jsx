import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from '../containers/Home';
import configureStore from '../stores/index';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../utils/history';
import ReactGA from '../utils/ga';
import SignUpPage from '../containers/SignUpPage';
import SignedUpPage from '../components/signin/SignedUpPage';
import PasswordRecoverPage from '../containers/PasswordRecoverPage';
import PasswordRecoveredPage from '../components/signin/PasswordRecoveredPage';
import PasswordEditPage from '../containers/PasswordEditPage';
import PasswordEditedPage from '../components/signin/PasswordEditedPage';
import SignInPage from '../containers/SignInPage';
import SettingsPage from '../containers/SettingsPage';
import Loading from '../containers/Loading';
import Toast from '../containers/Toast';
import ErrorModal from '../containers/ErrorModal';
import ConfirmModal from '../containers/ConfirmModal';

const store = configureStore();
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

document.addEventListener('DOMContentLoaded', () => {
  const bodyElement = document.createElement('div');
  bodyElement.setAttribute('id', 'body');

  ReactDOM.render(
    <Provider store={store}>
      <div id='root'>
        <Router history={history}>
          <Switch>
            <Route exact path='/users/sign_up' component={SignUpPage}/>
            <Route exact path='/users/sign_up/completed' component={SignedUpPage}/>
            <Route exact path='/users/password/recover' component={PasswordRecoverPage}/>
            <Route exact path='/users/password/recover/completed' component={PasswordRecoveredPage}/>
            <Route exact path='/users/password/edit' component={PasswordEditPage}/>
            <Route exact path='/users/password/edit/completed' component={PasswordEditedPage}/>
            <Route exact path='/users/sign_in' component={SignInPage}/>
            <Route exact path='/settings' component={SettingsPage}/>
            <Route exact path='/settings/:name' component={SettingsPage}/>
            <Route exact path='/okr/:okrHash' component={Home}/>
            <Route path='/' component={Home}/>
          </Switch>
        </Router>
        <Loading />
        <Toast />
        <ErrorModal />
        <ConfirmModal />
      </div>
    </Provider>,
    document.body.appendChild(bodyElement),
  );
});
