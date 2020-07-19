import React, { useState } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user';
const Navbar = ({ users, loginUser }) => {
  const renderUsers = () =>
    users &&
    users.map((user) => {
      return (
        <Dropdown.Item onClick={(e) => onNameClick(user)}>
          {user.name}
        </Dropdown.Item>
      );
    });

  const onNameClick = (user) => {
    setName(user.name);
    loginUser(user);
  };

  const [selectedName, setName] = useState('None');

  return (
    <>
      <div>
        {' '}
        <Menu vertical>
          <Dropdown item text='Select User'>
            <Dropdown.Menu>{renderUsers()}</Dropdown.Menu>
          </Dropdown>
          <div>{selectedName}</div>
        </Menu>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});

export default connect(mapStateToProps, { loginUser })(Navbar);
