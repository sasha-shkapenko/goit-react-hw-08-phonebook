import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, changeFilter }) => {
    return (
        <label className={s.label}>
            <span className={s.labelText}>
                Find contacts by name
            </span>
            <input
                value={value}
                onChange={changeFilter}
                className={s.input}
            />
        </label>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
}

export default Filter;