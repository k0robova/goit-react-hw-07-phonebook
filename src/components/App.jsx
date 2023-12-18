import React, { useEffect } from 'react';
import css from './App.module.css';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from './Form/Form';
import { getContacts, getIsLoading } from '../redux/contactsSlice';
import { fetchContactsAction } from '../redux/operations';
import { Loader } from './Loader/Loader';

export function App() {
  const contacts = useSelector(getContacts);

  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);

  //   useEffect(() => {
  //   async function getTrendingList() {
  //     try {
  //       setLoading(true);
  //       setError(false);

  //       const initialMovies = await fetchTrendingList();
  //       setMovieItems(initialMovies);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getTrendingList();
  // }, []);

  return (
    <div>
      <h1 className={css.main_title}>Phonebook</h1>
      <Form />

      <h2 className={css.second_title}>Contacts</h2>
      <Filter />

      {isLoading ? (
        <Loader />
      ) : contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p className={css.no_contacts}>No contacts added yet! </p>
      )}
    </div>
  );
}
