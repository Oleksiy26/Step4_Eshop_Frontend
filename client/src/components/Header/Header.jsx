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
import { checkInCart, checkInFav } from '../../store/counter/counter'
import SearchForm from '../Search'
import { useEffect } from 'react'
import { clearStatus } from '../../store/signIn/signIn'

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [searchView, setSearchView] = useState()
  const { inFav, inCart } = useSelector(state => state.counter)
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useSelector(state => state.location.location)

  useEffect(() => {
    setSearchView(false)
    setMenu(false)
  }, [location])

  const clickMenu = () => {
    setMenu(!menu)
  }

  const clickSearch = () => {
    setSearchView(!searchView)
  }

  const logOut = () => {
    dispatch(logout())
    dispatch(checkInCart(0))
    dispatch(checkInFav(0))
    dispatch(clearStatus())
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
          <Search onClick={() => clickSearch()} style={{ cursor: 'pointer' }} />
          <NavLink to='/fav'>
            <Fav />
            {inFav ? <Count count={inFav} /> : null}
          </NavLink>
          <NavLink to='/cart'>
            <Cart />
            {inCart ? <Count count={inCart} /> : null}
          </NavLink>
        </div>
        <Burger onClick={() => clickMenu()} />
      </header>
      {menu && <Menu closeFunc={() => clickMenu()} />}
      {searchView && <SearchForm />}
    </>
  )
}

export default Header
