import { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'components/ContactForm/ContactForm.styled';

export class Filter extends Component {
  static propTypes = {
    updateFilterValue: PropTypes.func.isRequired,
  };

  state = {
    filter: '',
  };

  updateValue = e => {
    const { updateFilterValue } = this.props;
    this.setState({ filter: e.target.value });

    updateFilterValue(e.target.value);
  };

  render() {
    return (
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          title="Enter name or surname"
          required
          onChange={this.updateValue}
          value={this.state.filter}
        />
      </Label>
    );
  }
}
