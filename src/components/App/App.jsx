import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm, Filter, Contacts } from 'components/index';
import { Title, SubTitle, Phonebook } from 'components/App/App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const updateFilterValue = value => {
    setFilter(value);
  };

  const addContact = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    const isAlreadyInContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    if (isAlreadyInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const updateList = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().match(filter.toLowerCase())
    );
  };

  const removeContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  return (
    <Phonebook>
      <Title>Phonebook</Title>
      <ContactForm onAddContact={addContact} />
      <SubTitle>Contacts</SubTitle>
      <Filter updateFilterValue={updateFilterValue} />
      <Contacts contacts={updateList(contacts)} removeContact={removeContact} />
    </Phonebook>
  );
};

//second
