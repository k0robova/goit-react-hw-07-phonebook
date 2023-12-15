import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterValueChange = evt => {
    dispatch(filter(evt.target.value));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="contact_name"
        placeholder="Search..."
        onChange={onFilterValueChange}
        className={css.input_find}
      />
    </div>
  );
};
