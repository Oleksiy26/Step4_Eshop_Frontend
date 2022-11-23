import './App.scss';
import Rout from './routes/Rout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import { sendRequest } from './serverrequest/sendRequest';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    sendRequest('products');
  }, []);

  useEffect(() => {
    sendRequest('slides');
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
