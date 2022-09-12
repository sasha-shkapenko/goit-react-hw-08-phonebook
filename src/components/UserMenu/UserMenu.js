import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';
import Button from 'react-bootstrap/Button';
import s from './UserMenu.module.css'

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    // const email = useSelector(authSelectors.getUserEmail);

    return (
        <div className={s.wrap}>
            <p className={s.nickName}>Welcome back, {name}!</p>
            <Button
                type="button"
                onClick={() => dispatch(authOperations.logOut())}
            >
                Log Out
            </Button>
        </div>
    );
}