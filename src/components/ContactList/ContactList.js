import { ContactItem } from "./ContactItem";
import { useSelector } from 'react-redux';

import s from './ContactList.module.css'

const getFilteredContacts = (items, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return items.filter(item => item.name.toLocaleLowerCase().includes(normalizedFilter));
}
const ContactList = () => {
    const items = useSelector(state => state.items.items);
    const filter = useSelector(state => state.items.filter);
    const filteredContacts = getFilteredContacts(items, filter);

    return (
        <ul className={s.list}>
            {filteredContacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    contact={{ id, name, number }}
                />

            ))}
        </ul>
    )
};


export default ContactList;