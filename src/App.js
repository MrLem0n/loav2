import './App.css';
import Navbar from'./components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ItemListContainer from './components/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import {Contacto} from './components/Pages/Contacto';
import {CartContainer} from './components/CartContainer/CartContainer';
import {CartProvider} from './Context/CartContext';
import {FirebasePage} from './components/FirebasePage'





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
          <Route path="/item/:prodId" element={<ItemDetailContainer/>}></Route>
          <Route path="/firebase" element={<FirebasePage/>}></Route>
          </Routes>
      </header>
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
