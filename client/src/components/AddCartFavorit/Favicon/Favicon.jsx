import React, {useContext} from "react";
import styles from "./Favicon.module.scss"
import { ReactComponent as Favorit } from './svg/favorit.svg';
import { ReactComponent as FavoritCheck } from './svg/favoritCheck.svg';
import {AuthContext} from "../../../context/AuthContext";
import {useSelector} from "react-redux";


const Favicon = ({ inFav, onClick, inWishlist }) => {
    const auth = useContext(AuthContext)
    const { isAuthenticated } = auth
    // const { inWishlist } = useSelector((state) => state.wishlist)

    // logs
    // console.log(inFav)
    // console.log(inWishlist)
    // logs

    const checkIcon = () => {
        return inFav ?
          <FavoritCheck
            className={styles.img}
            onClick={onClick}
          />
           :
            <Favorit className={styles.img} onClick={onClick} />;
      };

    return (
       checkIcon()
    )
}

export default Favicon;