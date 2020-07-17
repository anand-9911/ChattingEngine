import React, { useState } from 'react';
import MainComponent from './components/MainComponent';
import AddContact from './components/addContact/AddContact';
import EditContact from './components/editContact/EditContact';
import DeleteContact from './components/deleteContact/DeleteContact';
import Alert from './components/layout/Alert';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Navbar from './components/layout/Navbar';
import './App.css';
import DisplayContact from './components/listContact/DisplayContact';
import { connect } from 'react-redux';

const App = ({ user, isSelected }) => {
  return (
    <>
      <Router history={history}>
        <Navbar />
        <Alert />
        <div className='ui container'>
          <div className='ui grid'>
            <div className='eight wide column'>
              <Switch>
                <Route exact path='/' component={MainComponent} />
                <Route exact path='/add-contact' component={AddContact} />
                <Route exact path='/edit-contact' component={EditContact} />
                <Route exact path='/delete-contact' component={DeleteContact} />
              </Switch>
            </div>
            <div className='eight wide column'>
              {isSelected && <DisplayContact user={user} />}
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  isSelected: state.userReducer.isSelected,
});

export default connect(mapStateToProps)(App);
