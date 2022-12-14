import PageHome from "../pages/PageHome/PageHome";
import PageLogin from "../pages/PageLogin/PageLogin"
import PageCart from "../pages/PageCart/PageCart"
import {PageItem} from "../pages/PageItem/PageItem";
import PageFav from "../pages/PageFav";
import PageCatalog from "../pages/PageCatalog";

export const privateRoutes = [
    { path: '/', element: PageHome },
    { path: '/catalog', element: PageCatalog },
    { path: '/cart', element: PageCart },
    { path: '/catalog/:itemNo', element: PageItem },
    { path: '/fav', element: PageFav },
]

export const publicRoutes = [{ path: '/login', element: PageLogin }]