import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};

export const store = configureStore({ reducer });
