import { ContactForm, Filter, Contacts } from 'components/index';
import { Title, SubTitle, Phonebook } from 'components/App/App.styled';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const updateList = contacts => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().match(filter.toLowerCase())
  //   );
  // };

  return (
    <Phonebook>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      {/* <Contacts contacts={updateList(contacts)}  /> */}
      <Contacts />
    </Phonebook>
  );
};
