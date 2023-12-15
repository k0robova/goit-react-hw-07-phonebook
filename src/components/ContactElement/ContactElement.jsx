import React from 'react';
import css from './ContactElement.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactElement = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = idEl => {
    dispatch(deleteContact(idEl));
  };

  return (
    <li className={css.contact_item}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className={css.btn_delete}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactElement;
