import PropTypes from 'prop-types';
import { Label, Input } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ updateFilterValue }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        title="Enter name or surname"
        required
        onChange={e => updateFilterValue(e.target.value)}
      />
    </Label>
  );
};

Filter.propTypes = {
  updateFilterValue: PropTypes.func.isRequired,
};
