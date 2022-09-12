import { useState } from "react";
import { useAddContactMutation } from "redux/contacts/contactsApi";
import { useGetContactsQuery } from "redux/contacts/contactsApi";

import s from './ContactForm.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    const onList = contacts.find(contact => contact.name === name);
    if (onList) {
      alert('This contact is already added');
      return;
    }
    addContact({
      name,
      number,
    });
    reset();
  }
  const handleInput = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return new Error(`Error`);
    }
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

  return (
    <>
      <Form className={s.form} onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="tel"
            name="number"
            value={number}
            onChange={handleInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Form.Group>

        <Button variant="outline-primary" type="submit" disabled={isLoading}>
          Add contact
        </Button>
      </Form>

    </>
  );
};








