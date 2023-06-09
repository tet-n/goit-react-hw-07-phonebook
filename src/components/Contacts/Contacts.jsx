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

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  return (
    <Table>
      <tbody>
        {contacts.map(({ name, id, number }) => {
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

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   removeContact: PropTypes.func.isRequired,
// };
