import React from 'react';
import { useState } from 'react';
import css from './Form.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from '../../redux/contactsSlice';

export function Form() {
  const [value, setValue] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleFormSubmit = evt => {
    evt.preventDefault();
    resetForm();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === value.name.toLowerCase()
      )
    ) {
      alert(`${value.name} is already in contactcs!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      ...value,
    };

    dispatch(addContact(newContact));
  };

  const resetForm = () => {
    setValue({
      name: '',
      number: '',
    });
  };

  const handleChange = ({ target: { name, value } }) => {
    setValue(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.main_form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          required
          value={value.number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={css.btn_submit}>
        Add contact
      </button>
    </form>
  );
}
