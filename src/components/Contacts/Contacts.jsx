import { MdDeleteSweep } from 'react-icons/md';
import { IconContext } from 'react-icons';
import {
  Button,
  Table,
  THName,
  THNumber,
  TR,
  THButton,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const visibleContacts = (() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  })();

  return (
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
                  onClick={() => dispatch(removeContact(id))}
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
  );
};
