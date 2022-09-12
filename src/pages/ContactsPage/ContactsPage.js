import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import React from "react";

import s from './ContactsPage.module.css';

const ContactsPage = () => {
    return (
        <>
            <div className={s.container}>

                <h1 className={s.title}>Phonebook</h1>
                <ContactForm />
                <h2 className={s.subTitle}>Contacts</h2>
                <Filter />
                <ContactList />
            </div>
        </>
    )
}
export default ContactsPage;