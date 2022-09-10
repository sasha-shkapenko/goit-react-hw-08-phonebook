import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

import s from './ContactList.module.css';

const ContactItem = ({ contact }) => {
  const { id, name, phone } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <li className={s.listItem}>
      <p>{name}: {phone}</p>
      <button
        className={s.removeBtn}
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}>remove</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
}

export { ContactItem };
