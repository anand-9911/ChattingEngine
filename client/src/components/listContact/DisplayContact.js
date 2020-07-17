import React from 'react';
import PropTypes from 'prop-types';

const DisplayContact = ({ user: { name, email, phone, company, address } }) => {
  return (
    <>
      <div className='ui card'>
        <div className='content'>
          <div className='header'>{name}</div>
          <div>Email:{email}</div>
          <div>PhoneNumber:{phone}</div>
          <div>Company:{company}</div>
          <div>Address:{address}</div>
        </div>
      </div>
    </>
  );
};

DisplayContact.propTypes = {
  user: PropTypes.object.isRequired,
};

export default DisplayContact;
