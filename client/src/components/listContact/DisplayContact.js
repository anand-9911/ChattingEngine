import React from 'react';
import PropTypes from 'prop-types';

const DisplayContact = ({ user: { name, email, phone, company, address } }) => {
  return (
    <>
      <div className='ui card'>
        <div class='image'>
          <img src={`https://ui-avatars.com/api/?name=${name}`} alt='avatar' />
        </div>
        <div className='content'>
          <div className='header'>{name}</div>
          <br />
          <div>Email:{email}</div>
          <br />
          <div>PhoneNumber:{phone}</div>
          <br />
          <div>Company:{company}</div>
          <br />
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
