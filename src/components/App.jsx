import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Container } from './App.styled.js';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);

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
          <ContactList />
        </>
      )}
    </Container>
  );
};
