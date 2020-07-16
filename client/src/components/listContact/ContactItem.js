import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ users }) =>
  users.map((user) => {
    return (
      <>
        <div class='card'>
          <div class='card-body'>{user.name}</div>
        </div>
      </>
    );
  });
ContactItem.propTypes = {};

export default ContactItem;
