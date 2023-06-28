import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'components/Store/contactSlice';
import { contactSelector } from 'components/Store/selectors';
export const Contact = function () {
  const dispatch = useDispatch();
  const reduxContact = useSelector(contactSelector);

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
