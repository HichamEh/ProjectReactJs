import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import Main from './components/mainCart';
import {  Navigate, Route, Routes,  } from 'react-router-dom';

import Products from './components/Products';
function App() {
  return (
    <>
     <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path ="/products" element={<Product />}/>
        <Route exact path ="/products/:id" element={<Products />}/>
        <Route  exact path ="/about" element={<About />}/>
        <Route  exact path ="/cart" element={<Main />}/>
        <Route exact path ="/checkout" element={<Checkout />}/>
        <Route exact path ="/contact" element={<Contact />}/>
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </>
  );
}

export default App;
