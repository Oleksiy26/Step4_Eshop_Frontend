import React, { useState } from 'react';
import Button from '../../components/Button';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginSignIn from "../../components/LoginSignIn/LoginSignIn";
import Title from '../../components/Title';
import styles from "./PageLogin.module.scss"

const PageLogin = () => {
    const [visibleOrNot, setVisibleOrNot] = useState(false)

    const clicked = () => {
        setVisibleOrNot(!visibleOrNot)
    }

    return !visibleOrNot ? (
        <div className={styles.page}>
            
            <div className={styles.block}>
                <div className={styles.block_signin}>
                    <div className={styles.block_signin_content}>
                        <Title subtitle="Are you a user?"/>
                        <LoginSignIn />
                    </div>
                </div>
                <div className={styles.block_login}>
                    <div className={styles.block_login_content}>
                        <Title subtitle="Is it your first visit?"/>
                        <ul>
                            <li>10% discount for newsletter sign up</li>
                            <li>User cabinet with easy way to track your order</li>
                        </ul>
                        <Button text="Create account" onClick={clicked}/>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className={styles.page}>
            <div className={styles.create}>
                <Title subtitle="Edit personal information"/>
                <LoginForm />
            </div>
        </div>
    );
};

export default PageLogin;