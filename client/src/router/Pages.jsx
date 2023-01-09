import PageHome from '../pages/PageHome/PageHome'
import PageLogin from '../pages/PageLogin/PageLogin'
import PageCart from '../pages/PageCart/PageCart'
import { PageItem } from '../pages/PageItem/PageItem'
import PageFav from '../pages/PageFav'
import PageCatalog from '../pages/PageCatalog'
import PageSearch from '../pages/PageSearch/PageSearch'
import PageCheckout from '../pages/PageCheckout'
import { useSelector } from 'react-redux'

export const Pages = () => {
  const token = useSelector(state => state.auth.token)

  const pagesList = () => {
    if (token) {
      const pushPAges = allPages.push({
        path: '/checkout',
        element: PageCheckout
      })
      return allPages
    } else {
      return allPages
    }
  }

  const allPages = [
    { path: '/', element: PageHome },
    { path: '/cart', element: PageCart },
    { path: '/catalog', element: PageCatalog },
    { path: '/catalog/:itemNo', element: PageItem },
    { path: '/fav', element: PageFav },
    { path: '/login', element: PageLogin },
    { path: '/searching', element: PageSearch }
  ]

  return pagesList()
}
