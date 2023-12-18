import React from 'react';
import { useState } from 'react';
import css from './Form.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { addContactAction } from '../../redux/operations';

export function Form() {
  const [value, setValue] = useState({
    name: '',
    phone: '',
  });

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = evt => {
    evt.preventDefault();
    // resetForm();
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

    dispatch(addContactAction(newContact));
    resetForm();
  };

  const resetForm = () => {
    setValue({
      name: '',
      phone: '',
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
        Phone
        <input
          type="tel"
          name="phone"
          required
          value={value.phone}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={css.btn_submit}>
        Add contact
      </button>
    </form>
  );
}
