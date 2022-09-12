import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

import s from './ContactList.module.css';
import Button from 'react-bootstrap/Button';


const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <li className={s.listItem}>
      <p>{name}: {number}</p>
      <Button
        variant="outline-primary"
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}>remove</Button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
}

export { ContactItem };
