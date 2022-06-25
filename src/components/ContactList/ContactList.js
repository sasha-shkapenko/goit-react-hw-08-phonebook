import { ContactItem } from "./ContactItem";
import PropTypes from 'prop-types';
import s from './ContactList.module.css'

const ContactList = ({ filteredContacts, onDeleteContact }) => (
    <ul className={s.list}>
        {filteredContacts.map(({ id, name, number }) => (
            <ContactItem
                key={id}
                contact={{ id, name, number }}
                onDeleteContact={onDeleteContact}
            />

        ))}
    </ul>
);

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
    onDeleteContact: PropTypes.func.isRequired,

}

export default ContactList;