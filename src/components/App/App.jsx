import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm, Filter, Contacts } from 'components/index';
import { Title, SubTitle, Phonebook } from 'components/App/App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  //hi

  componentDidMount() {
    const storagedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (storagedContacts) this.setState({ contacts: storagedContacts });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    const isAlreadyInContacts = this.state.contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
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

  onUpdateList = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().match(this.state.filter.toLowerCase())
    );
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(contact => contact.id !== id) };
    });
  };

  render() {
    const { contacts } = this.state;
    const filteredContacts = this.onUpdateList(contacts);
    return (
      <Phonebook>
        <Title>Phonebook</Title>
        <ContactForm onAddContact={this.addContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter updateFilterValue={this.updateFilterValue} />
        <Contacts
          contacts={filteredContacts}
          removeContact={this.removeContact}
        />
      </Phonebook>
    );
  }
}
