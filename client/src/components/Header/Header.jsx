import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ReactComponent as User } from './svg/user.svg'
import { ReactComponent as Cart } from './svg/cart.svg'
import { ReactComponent as Fav } from './svg/fav.svg'
import { ReactComponent as Search } from './svg/search.svg'
import { ReactComponent as Logo } from './svg/logo.svg'
import { ReactComponent as Logout } from './svg/logout.svg'
import { useDispatch, useSelector } from 'react-redux'
import Menu from './Menu/Menu'
import Burger from './Burger'
import Count from './Count'
import styles from './Header.module.scss'
import { logout } from '../../store/tokenWork/tokenWork'

const Header = () => {
  const [menu, setMenu] = useState(false)
  const counerInFav = useSelector(state => state.counter.inFav)
  const counerInCart = useSelector(state => state.counter.inCart)
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const clickMenu = () => {
    setMenu(!menu)
  }

  const logOut = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__block_logo}>
          <NavLink to='/' className='logo'>
            <Logo />
          </NavLink>
        </div>
        <div className={styles.header__block_svg}>
          {!token ? (
            <NavLink to='/login'>
              <User style={{ cursor: 'pointer' }} />
            </NavLink>
          ) : (
            <Logout style={{ cursor: 'pointer' }} onClick={() => logOut()} />
          )}
          <NavLink to='/searching'>
            <Search />
          </NavLink>
          <NavLink to='/fav'>
            <Fav />
            {counerInFav ? <Count count={counerInFav} /> : null}
          </NavLink>
          <NavLink to='/cart'>
            <Cart />
            {counerInCart ? <Count count={counerInCart} /> : null}
          </NavLink>
        </div>
        <Burger onClick={() => clickMenu()} />
      </header>
      {menu && <Menu closeFunc={() => clickMenu()} />}
    </>
  )
}

export default Header
