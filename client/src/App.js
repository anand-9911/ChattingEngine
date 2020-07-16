import React from 'react';
import AddContact from './components/addContact/AddContact';
import ListContact from './components/listContact/ListContact';
import Alert from './components/layout/Alert';

const App = () => {
  return (
    <>
      <section className='container'>
        <Alert />
        <AddContact />
        <ListContact />
      </section>
    </>
  );
};

export default App;
