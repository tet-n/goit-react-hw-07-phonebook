import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    const isAlreadyInContacts = this.state.contacts.some(
      contact =>
        contact.name.toLowerCase === name.toLowerCase() &&
        contact.number === number
    );

    if (isAlreadyInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
  };

  updateFilterValue = filter => {
    this.setState({ filter });
  };

  onUpdateList = (contacts, filter) => {
    if (!filter.length) return contacts;
    const filteredUsers = contacts.filter(contact =>
      contact.name.toLowerCase().match(this.state.filter.toLowerCase())
    );

    return filteredUsers;
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(contact => contact.id !== id) };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.onUpdateList(contacts, filter);
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter updateFilterValue={this.updateFilterValue} />
        <Contacts
          contacts={filteredContacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}
