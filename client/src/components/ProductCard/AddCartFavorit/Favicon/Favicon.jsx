import React, { useContext } from "react";
import { ReactComponent as Favorit } from './svg/favorit.svg';
import { ReactComponent as FavoritCheck } from './svg/favoritCheck.svg';
import PropTypes from "prop-types";
import AddCartFavorit from "../AddCartFavorit";
import styles from "./Favicon.module.scss"

const Favicon = ({ inFav, onClick }) => {
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

AddCartFavorit.propTypes = {
    inFav: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Favicon;