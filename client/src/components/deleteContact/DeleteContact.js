import React from 'react';
import Modal from '../Modal';
import { deleteUser } from '../../actions/user';
import PropTypes from 'prop-types';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const DeleteContact = ({ location, deleteUser }) => {
  const { user } = location.state;
  const renderActions = () => {
    return (
      <>
        <Link
          className='ui button negative'
          onClick={() => {
            deleteUser(user._id);
            history.push('/');
          }}>
          Delete
        </Link>
        <Link className='ui button' to='/'>
          Cancle
        </Link>
      </>
    );
  };

  const renderContent = () => {
    return `Are you sure you want to delete the Contact with name: ${user.name}`;
  };

  return (
    <>
      <Modal
        title='Delete Contact'
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => history.push('/')}
      />
    </>
  );
};

DeleteContact.propTypes = {
  deleteUser: PropTypes.func.isRequired,
};

export default connect(null, { deleteUser })(DeleteContact);
