import { useState } from "react";
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from "redux/contactSlice";
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);

  const handleSubmit = (e) => {
    e.preventDefault();
    const onList = items.find(contact => contact.name === name);
    if (onList) {
      alert('This contact is already added');
      return;
    }
    dispatch(addContact({
      id: nanoid(),
      name,
      number,
    }));
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
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          <span className={s.labelText}>Name</span>
          <input
            type="text"
            name="name"
            className={s.input}
            value={name}
            onChange={handleInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />
        </label>

        <label>
          <span className={s.labelText}>Number</span>
          <input
            type="tel"
            name="number"
            className={s.input}
            value={number}
            onChange={handleInput}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={s.submitBtn} type="submit">Add contact</button>
      </form>

    </>
  );
};








