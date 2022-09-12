import { useSelector } from 'react-redux';
import { ContactItem } from "./ContactItem";
import { useGetContactsQuery } from "redux/contacts/contactsApi";

import s from './ContactList.module.css'

const ContactList = () => {
    const { data: contacts, isSuccess, isFetching } = useGetContactsQuery();
    const filter = useSelector(state => state.filter);
    const filteredContacts = () => {
        if (filter === '') {
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
                items.map(({ id, name, number }) => (
                    <ContactItem
                        key={id}
                        contact={{ id, name, number }}
                    />

                ))}
        </ul>
    )
};


export default ContactList;