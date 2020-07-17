import React from 'react';
import PropTypes from 'prop-types';
import { selectedUser } from '../../actions/user';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const onUserClick = (user, selectedUser) => {
  if (user.name) {
    selectedUser(user);
  }
};

const ContactItem = ({ users, selectedUser, isAuth, loggedUser }) =>
  users.map((user) => {
    return (
      <>
        <div className='ui card'>
          <div className='content'>{user.name}</div>
          <button
            className='ui primary basic button'
            onClick={(e) => onUserClick(user, selectedUser)}>
            View
          </button>
          <button className='ui primary basic button'>Chat</button>
        </div>
        {isAuth && user.name === loggedUser.name && (
          <>
            <Link
              to={{ pathname: '/edit-contact', state: { user: user } }}
              className='ui positive basic button'>
              Edit
            </Link>
            <Link
              to={{ pathname: '/delete-contact', state: { user: user } }}
              className='ui negative basic button'>
              Delete
            </Link>
          </>
        )}
      </>
    );
  });
ContactItem.propTypes = {
  users: PropTypes.array.isRequired,
  selectedUser: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  loggedUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.userReducer.isAuth,
  loggedUser: state.userReducer.loggedUser,
});

export default connect(mapStateToProps, { selectedUser })(ContactItem);
