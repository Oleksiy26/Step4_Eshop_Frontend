import PageHome from '../pages/PageHome/PageHome'
import PageLogin from '../pages/PageLogin/PageLogin'
import PageCart from '../pages/PageCart/PageCart'
import { PageItem } from '../pages/PageItem/PageItem'
import PageFav from '../pages/PageFav'
import PageCatalog from '../pages/PageCatalog'
import PageSearch from '../pages/PageSearch/PageSearch'
import PageCheckout from '../pages/PageCheckout'
import PageThanksForOrder from '../pages/PageThanksForOrder'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export const Pages = () => {
  const counterInCart = useSelector(state => state.counter.inCart)
  const token = useSelector(state => state.auth.token)

  useState(() => {
    if (counterInCart && token) {
      pages.push(
        { path: '/checkout', element: PageCheckout },
        { path: '/thanksfororder', element: PageThanksForOrder }
      )
    }
  }, [])

  const pages = [
    { path: '/', element: PageHome },
    { path: '/cart', element: PageCart },
    { path: '/catalog', element: PageCatalog },
    { path: '/catalog/:itemNo', element: PageItem },
    { path: '/fav', element: PageFav },
    { path: '/login', element: PageLogin },
    { path: '/searching', element: PageSearch }
  ]

  return { pages }
}
