import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ users }) =>
  users.map((user) => {
    return (
      <>
        <div className='ui card'>
          <div className='content'>{user.name}</div>
        </div>
      </>
    );
  });
ContactItem.propTypes = {};

export default ContactItem;
