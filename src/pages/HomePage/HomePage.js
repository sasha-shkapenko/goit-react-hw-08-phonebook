import React from "react";

import s from './HomePage.module.css';

const HomePage = () => (
    <div className={s.container}>
        <div className={s.wrap}>
            <h1>Welcome to the phone book app!</h1>
            <p className={s.text}>Store all of your contacts in one place, create your own book today!</p>
        </div>
    </div>
);
export default HomePage;