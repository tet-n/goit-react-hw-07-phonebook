import { MdDeleteSweep } from 'react-icons/md';
import { IconContext } from 'react-icons';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsSlice.js';
import {
  Button,
  Table,
  THName,
  THNumber,
  TR,
  THButton,
} from './Contacts.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';

export const Contacts = () => {
  const deleteContactId = id => {
    deleteContact(id);
  };

  const { data: contacts = [], isLoading, error } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(selectFilter);

  const visibleContacts = (() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  })();

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <Table>
        <tbody>
          {visibleContacts.map(({ name, id, number }) => {
            return (
              <TR key={id}>
                <THName>{name}</THName>
                <THNumber>{number}</THNumber>
                <THButton>
                  <Button
                    type="button"
                    aria-label="Delete contact"
                    onClick={() => deleteContactId(id)}
                  >
                    <IconContext.Provider value={{ size: '1.5em' }}>
                      <div>
                        <MdDeleteSweep />
                      </div>
                    </IconContext.Provider>
                  </Button>
                </THButton>
              </TR>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
