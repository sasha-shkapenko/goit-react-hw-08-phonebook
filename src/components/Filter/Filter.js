import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactSlice';

import Form from 'react-bootstrap/Form';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    return (
        <Form className={s.form}>
            <span className={s.label}>
                Start entering the name to find contact...
            </span>
            <Form.Control
                value={filter}
                onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
                className={s.input}
                placeholder="Name" />
        </Form>
    );
}

export default Filter;