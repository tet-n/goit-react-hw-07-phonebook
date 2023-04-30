export const Contacts = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: <span>{number}</span>
            </p>
            <button type="button" onClick={() => removeContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
