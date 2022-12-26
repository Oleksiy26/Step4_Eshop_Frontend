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
<<<<<<< HEAD
  { path: '/login', element: PageLogin }
=======
  { path: '/login', element: PageLogin },
  { path: '/searching', element: PageSearch }
>>>>>>> c52902c45fb1b4befe57cc7b8bd717539743c9c5
]

export const publicRoutes = [{ path: '/login', element: PageLogin }]
