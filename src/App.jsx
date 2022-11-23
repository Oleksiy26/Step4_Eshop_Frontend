import "./App.scss";
import Rout from "./routes/Rout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { getProducts } from "./api/index";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts("products");
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
