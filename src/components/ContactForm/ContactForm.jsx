import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit" aria-label="Add contact">
        Add contact
      </Button>
    </Form>
  );
};
