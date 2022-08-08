import { ContactItem } from "./ContactItem";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import s from './ContactList.module.css'

const ContactList = () => {
    const items = useSelector(state => state.items.items);
    console.log('items', items);
    return (
        <ul className={s.list}>
            {items.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    contact={{ id, name, number }}
                />

            ))}
        </ul>
    )
};


export default ContactList;