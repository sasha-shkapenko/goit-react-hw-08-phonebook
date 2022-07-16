import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = ({ name, number }) => {
    const onList = contacts.find(contact => contact.name === name);
    if (onList) {
      alert('This contact is already added');
      return;
    }
    setContacts(state => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return [newContact, ...state];
    });
  }

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  }

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  }

  const getFilteredContacts = (filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  }
  useEffect(() => {
    const contactList = JSON.parse(localStorage.getItem('contacts'));
    if (contactList) {
      setContacts(contactList);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm
        onFormSubmit={formSubmitHandler}
      />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        changeFilter={changeFilter}
      />
      <ContactList
        filteredContacts={getFilteredContacts(filter)}
        onDeleteContact={deleteContact}
      />
    </div>
  );

};

export default App;