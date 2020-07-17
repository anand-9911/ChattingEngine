import React from 'react';
import { Link } from 'react-router-dom';
import ListContact from './listContact/ListContact';

const MainComponent = () => {
  return (
    <>
      <Link to={'add-contact'} className='ui primary button'>
        Add Contact
      </Link>
      <ListContact />
    </>
  );
};

export default MainComponent;
