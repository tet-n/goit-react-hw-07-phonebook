import { useState } from 'react';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const addNumberContact = async () => {
    const newContact = { name, number };

    const isAlreadyInContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isAlreadyInContacts) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    try {
      await addContact(newContact);
      alert(`Contact ${newContact.name} was added`);
    } catch (error) {
      alert('Oops! Something went wrong. Please try again!');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addNumberContact();
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="[A-Za-zА-Яа-я\s]+"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </Label>
      <Button type="submit" aria-label="Add contact">
        Add contact
      </Button>
    </Form>
  );
};
