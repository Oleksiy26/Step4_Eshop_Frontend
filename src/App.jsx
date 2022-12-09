import "./App.scss";
import Rout from "./routes/Rout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/products/productSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Header />
      <Rout />
      <Footer />
    </>
  );
}

export default App;
