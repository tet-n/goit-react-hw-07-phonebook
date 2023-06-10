import { ContactForm, Filter, Contacts } from 'components/index';
import { Title, SubTitle, Phonebook } from 'components/App/App.styled';

export const App = () => {
  return (
    <Phonebook>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <Contacts />
    </Phonebook>
  );
};
