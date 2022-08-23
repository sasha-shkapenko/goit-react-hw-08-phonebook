import { useSelector } from 'react-redux';
import { ContactItem } from "./ContactItem";
import { useGetContactsQuery } from "redux/contactsApi";

import s from './ContactList.module.css'

const ContactList = () => {
    const { data: contacts, isSuccess, isFetching } = useGetContactsQuery();
    const filter = useSelector(state => state.filter);
    const filteredContacts = () => {
        if (filter === '' || !filter) {
            return contacts;
        }
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );

    };
    const items = filteredContacts();
    return (
        <ul className={s.list}>

            {isSuccess && contacts && !isFetching &&
                items.map(({ id, name, phone }) => (
                    <ContactItem
                        key={id}
                        contact={{ id, name, phone }}
                    />

                ))}
        </ul>
    )
};


export default ContactList;