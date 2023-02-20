import './App.css';
import ItemDetailContainer from './components/Routes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Routes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';                
import Contactanos from './components/Routes/Contactanos/Contactanos';
import CartProvider from './context/CartContext';
import Cart from './components/Routes/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Envios from './components/Routes/Envios/Envios';
import Form from './components/Routes/Form/Form';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Envios' element={<Envios/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/item' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/contacto' element={<Contactanos/>}/>
      </Routes>
    <Footer/>
    </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
