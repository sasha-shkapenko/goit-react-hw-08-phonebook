import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <li className={s.listItem}>
      <p>{name}: {number}</p>
      <button
        className={s.removeBtn}
        type="button"
        onClick={() => { onDeleteContact(id) }}>remove</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
}

export { ContactItem };
