import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.items.filter);
    const contacts = useSelector(state => state.items.items);

    // const getFilteredContacts = () => {
    //     const normalizedFilter = filter.toLocaleLowerCase();
    //     return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
    // }

    const onFilterChange = e => {
        dispatch(changeFilter(e.currentTarget.value));
        console.log(contacts)
        return contacts.filter(contact => contact.name.toLowerCase().includes(e.currentTarget.value))
    }
    return (
        <label className={s.label}>
            <span className={s.labelText}>
                Find contacts by name
            </span>
            <input
                value={filter}
                onChange={onFilterChange}
                className={s.input}
            />
        </label>
    );
}

export default Filter;