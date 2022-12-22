import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from './context/AuthContext';
import { fetchProducts } from './store/products/productSlice';
import { login } from './store/tokenWork/tokenWork';
import { fetchGetAllFromCart } from './store/cart/cart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './router/AppRouter';
import './styles/App.scss';

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const isAuthenticated = !!token;
  console.log('Token: ', !!token);
  

  useEffect(() => {
    dispatch(fetchProducts());
    const data = JSON.parse(localStorage.getItem('userToken'))
    if (data && data.token) dispatch(login(data.token))
    dispatch(fetchGetAllFromCart())
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
      }}
    >
      <>
      { isAuthenticated && <Header /> }
      <AppRouter isAuthenticated={isAuthenticated} />
      { isAuthenticated &&  <Footer /> }
      </>
    </AuthContext.Provider>
  );
}

export default App;
