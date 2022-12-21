import React, {useEffect} from 'react';
import NavigatePanel from "../../components/BreadCrumbs/BreadCrumbs";
import { NavLink } from "react-router-dom";
import "./PageProfile.scss"

const getUser = async () => {
    try {
        const response = await fetch(`/api/customers/customer`, {
            headers: {
                'Authorization': `${JSON.parse(localStorage.getItem(`userToken`)).token}`,
            }
        });
        if (!response.ok) {
            throw new Error('Server Error!')
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error.message)
    }
}
//
// useEffect(() => {
//     getUser()
// }, [])


const PageProfile = () => {
    return (
        <div>
            <NavigatePanel startFrom="Home"/>
            <div className="navPanel-container">
                <NavLink to="/profile"> My account </NavLink>
                {/*<Link> </Link>*/}
                <span> Addresses </span>
                <NavLink to="/cart"> Cart </NavLink>
                <NavLink to="/fav">Wishlist</NavLink>
            </div>
        </div>
    );
};

export default PageProfile;