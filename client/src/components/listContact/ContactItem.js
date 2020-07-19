import React from 'react';
import PropTypes from 'prop-types';
import { selectedUser, chatWindowOpen } from '../../actions/user';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const onUserClick = (user, selectedUser) => {
  if (user.name) {
    selectedUser(user);
  }
};

const onChatClick = (user, chatWindowOpen) => {
  if (user.name) chatWindowOpen(user);
};

const ContactItem = ({
  users,
  selectedUser,
  isAuth,
  loggedUser,
  chatWindowOpen,
}) =>
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
          {isAuth && user.name !== loggedUser.name && (
            <button
              className='ui primary basic button'
              onClick={(e) => onChatClick(user, chatWindowOpen)}>
              Chat
            </button>
          )}
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
  chatWindowOpen: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.userReducer.isAuth,
  loggedUser: state.userReducer.loggedUser,
});

export default connect(mapStateToProps, { selectedUser, chatWindowOpen })(
  ContactItem
);
