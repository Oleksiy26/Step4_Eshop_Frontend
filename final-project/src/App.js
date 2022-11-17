import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Rout from './routes/Rout';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header/>
      <main>
      <Rout/>
      </main>
      <Footer/>
    </>

  );
}

export default App;
