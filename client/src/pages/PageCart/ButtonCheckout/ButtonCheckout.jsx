import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import Button from "../../../components/Button/Button";

const ButtonCheckout = () => {
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate("/login")
    }

    return token ? (
        <Button
            onClick={null}
            text="Proceed to checkout"
        />
    ) : ( 
          <>
            <Button 
                // to="/login"
                onClick={navigateToLogin}
                text="Proceed to checkout"
            />
          </>
    )
}

export default ButtonCheckout