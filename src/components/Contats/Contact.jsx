import { useSelector } from 'react-redux';

export const Contact = function (props) {
  const { contacts, onDeleteContact } = props;
  console.log(props);
  const reduxContact = useSelector(({ contact }) => contact);
  console.log('redaxContact', reduxContact);

  return (
    <ul>
      {reduxContact !== [] &&
        reduxContact.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};
