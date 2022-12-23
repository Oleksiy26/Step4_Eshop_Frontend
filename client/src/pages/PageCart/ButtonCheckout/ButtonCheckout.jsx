import React from "react";
import { useSelector } from "react-redux";
import Button from "../../../components/Button/Button";

const ButtonCheckout = () => {
    const token = useSelector((state) => state.auth.token);

    return token ? (
        <Button
        onClick={null}
        text="Proceed to checkout"
        />
    ) : ( <>
    <Button 
        to="/login"
        text="Proceed to checkout"
        />
    </>
    )
}

export default ButtonCheckout