import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <section>
        <div>
          <h2>Phonebook</h2>
          <form>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>

            <button type="submit">Add contact</button>
          </form>
        </div>
        <div>
          <h2>Contacts</h2>
        </div>
      </section>
    );
  }
}
