import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'components/Store/stepSlice';
export const Contact = function (props) {
  console.log(props);
  const reduxContact = useSelector(({ contact }) => contact);
  const dispatch = useDispatch();
  console.log('redaxContact', reduxContact);
  const reduxDeleteContact = id => {
    dispatch(removeContact(reduxContact.filter(el => el.id !== id)));
  };
  return (
    <ul>
      {reduxContact !== [] &&
        reduxContact.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button type="button" onClick={() => reduxDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};
