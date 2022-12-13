import "./styles/App.scss";
// import Rout from "./router/Rout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from './context/AuthContext';
import { fetchProducts } from "./store/products/productSlice";
import { useAuth } from "./hooks/useAuth";
import AppRouter from "./router/AppRouter";

function App() {
  const dispatch = useDispatch();

  const { token, logout, login, ready } = useAuth()
  const isAuthenticated = !!token
  console.log('Token: ', !!token)

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
      <AuthContext.Provider
          value={{
              token,
              login,
              logout,
              isAuthenticated,
              ready,
          }}
      >
    <>
      <Header/>
      <AppRouter isAuthenticated={isAuthenticated} />
      { isAuthenticated &&  <Footer />}
    </>
      </AuthContext.Provider>
  );
}

export default App;
