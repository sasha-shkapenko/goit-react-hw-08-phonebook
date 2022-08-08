import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.items.filter);

    return (
        <label className={s.label}>
            <span className={s.labelText}>
                Find contacts by name
            </span>
            <input
                value={filter}
                onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
                className={s.input}
            />
        </label>
    );
}

export default Filter;