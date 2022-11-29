import "./App.scss";
import Rout from "./routes/Rout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { getProducts } from "./api/index";
import { useDispatch } from "react-redux";
import { loadProducts } from "./store/products/productSlice";


function App() {
  const dispatch = useDispatch();

  const loadItems = async () => {
    const prod = await getProducts("products");
    dispatch(loadProducts(prod));
  };

  useEffect(() => {
    loadItems();
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
