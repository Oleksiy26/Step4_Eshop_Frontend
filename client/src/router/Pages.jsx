import PageHome from '../pages/PageHome/PageHome'
import PageLogin from '../pages/PageLogin/PageLogin'
import PageCart from '../pages/PageCart/PageCart'
import { PageItem } from '../pages/PageItem/PageItem'
import PageFav from '../pages/PageFav'
import PageCatalog from '../pages/PageCatalog'
import PageCheckout from '../pages/PageCheckout'

export const publicRoutes = [
  { path: '/', element: PageHome },
  { path: '/cart', element: PageCart },
  { path: '/catalog', element: PageCatalog },
  { path: '/catalog/:itemNo', element: PageItem },
  { path: '/fav', element: PageFav },
  { path: '/login', element: PageLogin }
]

export const privateRoutes = [
  ...publicRoutes,
  { path: '/checkout', element: PageCheckout }
]
