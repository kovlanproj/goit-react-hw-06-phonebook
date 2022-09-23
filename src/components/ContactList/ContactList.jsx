import { Contact } from './Contact';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.contacts.contacts.filter);
  const dispatch = useDispatch();

  function getFilteredContacts(contacts, filter) {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }

  return (
    <ul>
      {getFilteredContacts(contacts, filter).map(contact => (
        <Contact
          contact={contact}
          key={contact.id}
          onDeleteContact={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};
