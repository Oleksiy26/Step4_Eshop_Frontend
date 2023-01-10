import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ContainerFav from './ContainerFav/ContainerFav'
import { useDispatch } from 'react-redux'
import { checkLocation } from '../../store/location/location'
import { useLocation } from 'react-router-dom'
import Title from '../../components/Title/Title'
import { fetchWishlist } from '../../store/wishlist/ActionCreator'
import { AuthContext } from '../../context/AuthContext'
import Loader from '../../components/Loader'
import Errortext from '../../components/ErrorText'

const PageFav = () => {
  const products = useSelector(state => state.products)
  const favCounter = useSelector(state => state.counter)
  const { favItems, isItemsLoading, itemsError } = useSelector(
    state => state.wishlist
  )
  const dispatch = useDispatch()
  const location = useLocation()
  const auth = useContext(AuthContext)
  const token = useSelector(state => state.auth.token)

  const { isAuthenticated } = auth

  useEffect(() => {
    dispatch(checkLocation(location.pathname))
  }, [dispatch, location.pathname])

  const findItemsFav = () => {
    const itemsFav = JSON.parse(localStorage.getItem('fav'))

    if (itemsFav) {
      return products.products.filter(item => itemsFav.includes(item._id))
    }
  }

  return (
    <div className='container'>
      <Title
        subtitle={
          isAuthenticated
            ? favItems.products
              ? 'Your favourite cards'
              : 'No cards in favourites'
            : favCounter.inFav
            ? 'Your favourite cards'
            : 'No cards in favourites'
        }
      />
      {isItemsLoading ? (
        <Loader />
      ) : (
        <ContainerFav items={token ? favItems : findItemsFav()} />
      )}
    </div>
  )
}

export default PageFav
