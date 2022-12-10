import React from "react";
import styles from "./Favicon.module.scss"
import { ReactComponent as Favorit } from './svg/favorit.svg';
import { ReactComponent as FavoritCheck } from './svg/favoritCheck.svg';


const Favicon = ({inFav, onClick}) => {

    const checkIcon = () => {
        return inFav ? 
          <FavoritCheck
            className={styles.img}
            onClick={onClick}
          />
         : <Favorit className={styles.img} onClick={onClick} />;
      };

    return (
        checkIcon()
    )
}

export default Favicon;