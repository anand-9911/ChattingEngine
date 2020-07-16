import React from 'react';
import MainComponent from './components/MainComponent';
import AddContact from './components/addContact/AddContact';
import Alert from './components/layout/Alert';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Alert />
        <section className='ui container'>
          <Switch>
            <Route exact path='/' component={MainComponent} />
            <Route exact path='/add-contact' component={AddContact} />
          </Switch>
        </section>
      </Router>
    </>
  );
};

export default App;
