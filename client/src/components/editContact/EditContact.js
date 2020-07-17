import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editUser } from '../../actions/user';
import { Link } from 'react-router-dom';
import history from '../../history';
import PropTypes from 'prop-types';
import Modal from '../Modal';

const EditContact = ({ location, editUser }) => {
  const { user } = location.state;

  const [formData, setformData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
  });

  const { name, email, phone, company, address } = formData;

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    editUser(user._id, formData);
  };

  const renderContent = () => {
    return (
      <>
        <form className='ui form' onSubmit={(e) => onFormSubmit(e)}>
          <div className='field'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder={user.name}
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='field'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              placeholder={user.email}
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='field'>
            <label>Phone</label>
            <input
              type='text'
              name='phone'
              placeholder={user.phone}
              value={phone}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='field'>
            <label>Company</label>
            <input
              type='text'
              name='company'
              placeholder={user.company}
              value={company}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className='field'>
            <label>Address</label>
            <input
              type='text'
              name='address'
              placeholder={user.address}
              value={address}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <button className='ui primary button' type='submit'>
            Submit
          </button>
        </form>
      </>
    );
  };

  const renderActions = () => {
    return (
      <>
        <Link className='ui button' to='/'>
          Cancle
        </Link>
      </>
    );
  };

  return (
    <>
      <Modal
        title='Edit Contact'
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => history.push('/')}
      />
    </>
  );
};

EditContact.propTypes = {
  editUser: PropTypes.func.isRequired,
};

export default connect(null, { editUser })(EditContact);
