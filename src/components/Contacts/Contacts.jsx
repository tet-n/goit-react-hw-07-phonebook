import PropTypes from 'prop-types';
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

export const Contacts = ({ contacts, removeContact }) => {
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
                  onClick={() => removeContact(id)}
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

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
};
