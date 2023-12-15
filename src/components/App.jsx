import React from 'react';
import css from './App.module.css';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { Form } from './Form/Form';
import { getContacts } from '../redux/contactsSlice';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <h1 className={css.main_title}>Phonebook</h1>
      <Form />

      <h2 className={css.second_title}>Contacts</h2>
      <Filter />

      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className={css.no_contacts}>No contacts added yet! </p>
      )}
    </div>
  );
}
