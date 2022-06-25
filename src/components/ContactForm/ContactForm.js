import { Component } from "react";
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.reset();
  }
  handleInput = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value, })
  }

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  }
  render() {
    const { name, number } = this.state;

    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label>
            <span className={s.labelText}>Name</span>
            <input
              type="text"
              name="name"
              className={s.input}
              value={name}
              onChange={this.handleInput}
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
              onChange={this.handleInput}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={s.submitBtn} type="submit">Add contact</button>
        </form>

      </>
    );
  }
};
export default ContactForm;







