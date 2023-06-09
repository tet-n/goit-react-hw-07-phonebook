import { ContactForm, Filter, Contacts } from 'components/index';
import { Title, SubTitle, Phonebook } from 'components/App/App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Phonebook>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {contacts.length && <Contacts />}
    </Phonebook>
  );
};
