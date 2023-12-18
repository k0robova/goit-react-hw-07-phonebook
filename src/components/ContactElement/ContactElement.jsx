import React from 'react';
import css from './ContactElement.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactAction } from '../../redux/operations';

export const ContactElement = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const onDeleteContact = idEl => {
    dispatch(deleteContactAction(idEl));
  };

  return (
    <li className={css.contact_item}>
      <p>
        {name}: {phone}
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
