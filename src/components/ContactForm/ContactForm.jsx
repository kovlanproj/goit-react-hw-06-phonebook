import { addContact } from 'redux/contactsSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { Label } from './ContactForm.styled.js';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);

  const checkContact = name => {
    return contacts.map(contact => contact.name).includes(name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const {
      elements: { name, number },
    } = e.currentTarget;
    if (checkContact(name)) {
      alert(`${name} is already exist in contacts.`);
      return;
    }
    dispatch(addContact({ name: name.value, number: number.value }));
    name.value = '';
    number.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <button type="submit">Add contact</button>
    </form>
  );
};
