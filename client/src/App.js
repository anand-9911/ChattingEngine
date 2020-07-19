import React, { useEffect } from 'react';
import MainComponent from './components/MainComponent';
import AddContact from './components/addContact/AddContact';
import EditContact from './components/editContact/EditContact';
import DeleteContact from './components/deleteContact/DeleteContact';
import Alert from './components/layout/Alert';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Navbar from './components/layout/Navbar';
import { fetchUsers } from './actions/user';
import './App.css';
import DisplayContact from './components/listContact/DisplayContact';
import { connect } from 'react-redux';

const App = ({ user, isSelected, isChatWindowOpen, fetchUsers, chatUser }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <>
      <div className='background'>
        {' '}
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
                  <Route
                    exact
                    path='/delete-contact'
                    component={DeleteContact}
                  />
                </Switch>
              </div>
              <div className='eight wide column'>
                {isSelected && (
                  <div>
                    <div>
                      <br />
                      <DisplayContact user={user} />
                    </div>
                  </div>
                )}
                {isChatWindowOpen && <div>Chat Window:- {chatUser.name}</div>}
              </div>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  isSelected: state.userReducer.isSelected,
  isChatWindowOpen: state.userReducer.isChatWindowOpen,
  chatUser: state.userReducer.chatUser,
});

export default connect(mapStateToProps, { fetchUsers })(App);
