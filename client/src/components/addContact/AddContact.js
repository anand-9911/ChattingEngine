import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/user';
import { Link } from 'react-router-dom';
import history from '../../history';
import PropTypes from 'prop-types';
import Modal from '../Modal';

const AddContact = ({ addUser }) => {
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
    addUser(formData);
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
              placeholder='Enter your Name'
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
              placeholder='Enter valid email ID'
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
              placeholder='Phone Number'
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
              placeholder='Company'
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
              placeholder='Address'
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
        title='Add Contact'
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => history.push('/')}
      />
    </>
  );
};

AddContact.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export default connect(null, { addUser })(AddContact);
