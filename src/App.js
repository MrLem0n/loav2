import './App.css';
import Navbar from'./components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ItemListContainer from './components/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import {Contacto} from './components/Pages/Contacto';
import {CartContainer} from './components/CartContainer/CartContainer';
import {CartProvider} from './components/Context/CartContext';






function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
          <Navbar></Navbar>
          <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/productos" element={<ItemListContainer/>}></Route>
          <Route path="/category/:category" element={<ItemListContainer/>}></Route>
          <Route path="/Contacto" element={<Contacto/>}></Route>
          <Route path="/cart" element={<CartContainer/>}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
          </Routes>
      </header>
      
      
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
