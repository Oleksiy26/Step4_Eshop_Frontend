import PageHome from '../pages/PageHome/PageHome'
import PageLogin from '../pages/PageLogin/PageLogin'
import PageCart from '../pages/PageCart/PageCart'
import { PageItem } from '../pages/PageItem/PageItem'
import PageFav from '../pages/PageFav'
import PageCatalog from '../pages/PageCatalog'
import PageProfile from '../pages/PageProfile/PageProfile'
import PageSearch from '../pages/PageSearch/PageSearch'

export const privateRoutes = [
  { path: '/', element: PageHome },
  { path: '/cart', element: PageCart },
  { path: '/catalog', element: PageCatalog },
  { path: '/catalog/:itemNo', element: PageItem },
  { path: '/fav', element: PageFav },
  { path: '/profile', element: PageProfile },
  { path: '/login', element: PageLogin },
  { path: '/searching', element: PageSearch }
]
export const publicRoutes = [{ path: '/login', element: PageLogin }]
