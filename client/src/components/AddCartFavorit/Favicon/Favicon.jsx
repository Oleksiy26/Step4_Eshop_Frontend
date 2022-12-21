import React, {useContext, useState} from "react";
import styles from "./Favicon.module.scss"
import { ReactComponent as Favorit } from './svg/favorit.svg';
import { ReactComponent as FavoritCheck } from './svg/favoritCheck.svg';
import {AuthContext} from "../../../context/AuthContext";
import {useSelector} from "react-redux";
import {addToWishlist, deleteItemFromWishlist} from "../../../store/wishlist/ActionCreator";


const Favicon = ({ inFav, onClick }) => {
    const { favItems } = useSelector((state) => state.wishlist)

    const auth = useContext(AuthContext)
    const { isAuthenticated } = auth

    // logs
    // console.log(inFav)
    // console.log(onClick)
    // console.log(inWishlist)
    // logs

    // const toggleSmth = () => {
    //     if(isAuthenticated) {
    //         deleteFromWish()
    //     } else {
    //         onClick()
    //     }
    // }

        // const toggleEv = () => {
    //     if(isAuthenticated) {
    //
    //     }
    // }

    // const checkIcon = (flag) => {
    //     return (
    //
    //         )

        // return (flag) ?
        //   <FavoritCheck
        //     className={styles.img}
        //     onClick={onClick}
        //   />
        //    :
        //     <Favorit className={styles.img} onClick={onClick} />;
    // };

        // <>
        //   { isAuthenticated ? checkIcon(isAuthenticated) : checkIcon(inFav) }
        // </>
    return (
        <>
            {
                 inFav ?
                     (
                    <FavoritCheck
                         className={styles.img}
                         onClick={onClick}
                    />
                ) : (
                   <Favorit className={styles.img} onClick={onClick} />
                )
            }
        </>
    )
}

// checkIcon(inFav)
export default Favicon;