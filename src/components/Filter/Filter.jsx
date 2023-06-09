import { Label, Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { updateFilterValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        title="Enter name or surname"
        required
        onChange={e => dispatch(updateFilterValue(e.target.value))}
      />
    </Label>
  );
};
