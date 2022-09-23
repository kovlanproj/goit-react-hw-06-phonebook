import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '559-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload
      );
    },
    changeFilter: (state, action) => {
      state.contacts.filter = action.payload;
    },
    addContact: (state, action) => {
      state.contacts.items.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
  },
});

export const { deleteContact, changeFilter, addContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
