import { Component } from 'react';

export class Filter extends Component {
  state = {
    filter: '',
  };

  updateValue = e => {
    this.setState({ filter: e.target.value });

    this.props.updateFilterValue(e.target.value);
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          title="Enter name or surname"
          required
          onChange={this.updateValue}
          value={this.state.filter}
        />
      </label>
    );
  }
}
