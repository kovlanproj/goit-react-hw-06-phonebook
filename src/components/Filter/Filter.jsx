import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const filteredContacts = useSelector(state => state.contacts.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filteredContacts}
        onChange={e => dispatch(changeFilter(e.target.value.toLowerCase()))}
      />
    </label>
  );
};
