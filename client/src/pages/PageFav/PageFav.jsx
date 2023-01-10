import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ContainerFav from './ContainerFav/ContainerFav'
import { useDispatch } from 'react-redux'
import { checkLocation } from '../../store/location/location'
import { useLocation } from 'react-router-dom'
import Title from '../../components/Title/Title'
import Loader from '../../components/Loader'
import Errortext from '../../components/ErrorText'

const PageFav = () => {
  const products = useSelector(state => state.products)
  const favCounter = useSelector(state => state.counter.inFav)
  const { favItems, isItemsLoading, itemsError } = useSelector(
    state => state.wishlist
  )
  const dispatch = useDispatch()
  const location = useLocation()
  const token = useSelector(state => state.auth.token)

  useEffect(() => {
    dispatch(checkLocation(location.pathname))
  }, [dispatch, location.pathname, favItems])

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
          favCounter ? 'Your favourite cards' : 'No cards in favourites'
        }
      />
      {isItemsLoading ? (
        <Loader />
      ) : (
        <>
          {(token ? favItems.products : findItemsFav()) ? (
            <ContainerFav items={token ? favItems : findItemsFav()} />
          ) : null}
        </>
      )}
    </div>
  )
}

export default PageFav
