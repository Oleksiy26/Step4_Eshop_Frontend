import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from './context/AuthContext'
import { fetchProducts } from './store/products/productSlice'
import { login } from './store/tokenWork/tokenWork'
import { fetchAddToCart, fetchGetAllFromCart } from './store/cart/cart'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AppRouter from './router/AppRouter'
import './styles/App.scss'
import { fetchWishlist } from './store/wishlist/ActionCreator'
import { useLocation } from 'react-router-dom'
import { checkLocation } from './store/location/location'
import { addToWishlist } from './store/wishlist/ActionCreator'
import { fetchGetUser } from './store/user/userSlice'

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  const locationLogin = useSelector(state => state.location.locationLogin)
  const location = useLocation()
  useSelector(state => state.counter)
  const counterInCart = useSelector(state => state.counter.inCart)
  const { favItems } = useSelector(state => state.wishlist)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(checkLocation(location.pathname))
    const data = JSON.parse(localStorage.getItem('userToken'))
    if (data && data.token) dispatch(login(data.token))
    if (token) {
      dispatch(fetchGetAllFromCart())
      dispatch(fetchWishlist())
      dispatch(fetchGetUser())
    }
  }, [dispatch, token, locationLogin, location])

  useEffect(() => {
    if (token) {
      if (JSON.parse(localStorage.getItem('cart'))) {
        const cards = JSON.parse(localStorage.getItem('cart'))
        cards.map(item => {
          dispatch(fetchAddToCart(item))
        })
        localStorage.removeItem('cart')
      }

      if (JSON.parse(localStorage.getItem('fav'))) {
        const favs = JSON.parse(localStorage.getItem('fav'))
        const arrayOfFovProducts = favItems.products.products
        if (arrayOfFovProducts) {
          const arrayOfId = arrayOfFovProducts.map(item => {
            return item._id
          })
          const uniqueItemsFromLocalStorage = favs.filter(
            item => !arrayOfId.includes(item)
          )
          if (uniqueItemsFromLocalStorage) {
            uniqueItemsFromLocalStorage.map(item => {
              dispatch(addToWishlist(item))
            })
          }
          localStorage.removeItem('fav')
        }
      }
    }
  }, [favItems, token])

  return (
    <AuthContext.Provider
      value={{
        token
      }}
    >
      <Header />
      <AppRouter counterInCart={counterInCart} token={token} />
      {!locationLogin ? <Footer /> : null}
    </AuthContext.Provider>
  )
}

export default App
