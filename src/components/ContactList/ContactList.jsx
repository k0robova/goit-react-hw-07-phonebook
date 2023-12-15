import React from 'react';
import { useSelector } from 'react-redux';
import ContactElement from 'components/ContactElement/ContactElement';
import { getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleFilteredContacts = filteredContacts();

  return (
    <ul>
      {visibleFilteredContacts.map(({ id, name, number }) => (
        <ContactElement key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
