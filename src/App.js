import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { Step } from './components/Step/Step';
import { Section } from './components/Section/Section';
import { Contact } from './components/Contats/Contact';
import { createAction } from '@reduxjs/toolkit';
import { Filter } from './components/FilterContact/FilterContact';
import {
  getContactSelector,
  getStepSelector,
} from './components/Store/selectors';
import Form from './components/Form/Form';
import { addContact } from 'components/Store/stepSlice';

// ==========Hook============

const App = () => {
  const { contact } = useSelector(getContactSelector);
  const { step } = useSelector(getStepSelector);
  console.log('contact', contact);
  console.log('step', step);
  const dispatch = useDispatch();
  //*useState
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  //*useState

  // const handleClick = () => {
  //   dispatch({ type: 'addContact', payload: { name: 'ol', number: '555' } });
  // };
  useEffect(() => {
    if (localStorage.contacts) {
      const jsonContacts = localStorage.getItem('contacts');
      const parseJson = JSON.parse(jsonContacts);

      setContacts(parseJson);
    }
  }, []);

  const formSubmitHendler = data => {
    if (data && contacts.find(el => el.name === data.name)) {
      return Notify.failure('Sorry, this contact already in your list.');
    } else {
      const { name, number } = data;

      // const createContact = createAction('addContact');

      dispatch(
        addContact({
          id: nanoid(),
          name,
          number,
        })
      );
    }
  };
  useEffect(() => {
    if (contacts.length > 0)
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const DeleteContact = ContactId => {
    if (contacts !== []) {
      setContacts(prevState => prevState.filter(el => el.id !== ContactId));
    }
  };

  const handleSearchInput = evt => setFilter(evt.target.value);

  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Section>
        <Step />

        <h1>Phonebook</h1>
        <Form onSubmit={formSubmitHendler} />
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleSearchInput} />

        <Contact contacts={visibleContacts} onDeleteContact={DeleteContact} />
      </Section>
    </>
  );
};

// =============CLASS==============
// class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     console.log('daadlfjkshd');

//     if (localStorage.contacts) {
//       const jsonContacts = localStorage.getItem('contacts');
//       const parseJson = JSON.parse(jsonContacts);
//       this.setState({
//         contacts: parseJson,
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('adasdasd');

//     console.log(JSON.stringify(this.state.contacts));
//     if (this.state.contacts !== prevState.contacts)
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }

//   formSubmitHendler = data => {
//     const state = this.state.contacts.find(el => el.name === data.name);
//     if (state) {
//       return Notify.failure('Sorry, this contact already in your list.');
//     } else {
//       this.addNewContact(data);
//     }
//   };

//   addNewContact = data => {
//     const { name, number } = data;
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     this.setState(prevState => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//   };

//   DeleteContact = ContactId => {
//     console.log(ContactId);
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(el => ContactId !== el.id),
//     }));
//   };

//   handleSearchInput = evt => {
//     this.setState({
//       filter: evt.target.value,
//     });
//   };

//   render() {
//     const { filter = '', contacts } = this.state;

//     const visibleContacts = contacts.filter(el => el.name.includes(filter));

//     return (
//       <>
//         <Section>
//           <h1>Phonebook</h1>
//           <Form onSubmit={this.formSubmitHendler} />
//         </Section>

//         <Section>
//           <h2>Contacts</h2>
//           <Filter value={filter} onChange={this.handleSearchInput} />
//           <Contact
//             contacts={visibleContacts}
//             onDeleteContact={this.DeleteContact}
//           />
//         </Section>
//       </>
//     );
//   }
// }

export default App;
