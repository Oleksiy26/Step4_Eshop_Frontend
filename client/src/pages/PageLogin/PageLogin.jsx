import React, { useState } from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginSignIn from "../../components/LoginSignIn/LoginSignIn";

const PageLogin = () => {
    const [visibleOrNot, setVisibleOrNot] = useState(false)

    const clicked = () => {
        setVisibleOrNot(!visibleOrNot)
    }

    return (
        <div>
            <LoginForm />
            <button onClick={clicked}> Click! </button>
            {visibleOrNot && <LoginSignIn />}
        </div>
    )
};

export default PageLogin;