import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Container } from './App.styled.js';
import { useSelector, useDispatch } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(localStorage.getItem('contacts')) ?? [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '559-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  //   );
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const checkContact = name => {
    return contacts.map(contact => contact.name).includes(name);
  };

  // const addContact = (name, number) => {
  //   if (checkContact(name)) {
  //     alert(`${name} is already exist in contacts.`);
  //     return;
  //   }
  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   setContacts(contacts => [newContact, ...contacts]);
  // };

  // const deleteContact = contactId => {
  //   setContacts(prev => prev.filter(({ id }) => id !== contactId));
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>Contact list is empty now</p>
      ) : (
        <>
          <Filter />
          <ContactList
          // contacts={getFilteredContacts()}
          // onDeleteContact={deleteContact}
          />
        </>
      )}
    </Container>
  );
};
