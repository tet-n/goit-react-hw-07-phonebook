import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  contactList: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, { payload }) {
      state.contactList.push(payload);
    },
    removeContact(state, { payload }) {
      // return state.contactList.filter(contact => contact.id !== payload); // Чому такий метод не спрацював? У разі видалення просто повертав undefined. Мені  треба повернутися на курс JS?))

      const index = state.contactList.findIndex(
        contact => contact.id === payload
      );
      state.contactList.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, removeContact } = contactsSlice.actions;
