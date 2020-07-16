import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

const ListContact = ({ fetchUsers, users, loading }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (users && !loading) {
    return (
      <>
        <ContactItem users={users} />
      </>
    );
  } else return <Spinner />;
};

ListContact.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  loading: state.userReducer.loading,
});

export default connect(mapStateToProps, { fetchUsers })(ListContact);
