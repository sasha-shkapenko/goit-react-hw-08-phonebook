import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from "redux/contactSlice";

import s from './ContactList.module.css';

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  return (
    <li className={s.listItem}>
      <p>{name}: {number}</p>
      <button
        className={s.removeBtn}
        type="button"
        onClick={() => { dispatch(deleteContact(id)) }}>remove</button>
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
