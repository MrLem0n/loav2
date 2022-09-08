import './App.css';
import Navbar from'./components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ItemListContainer from './components/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import {Contacto} from './components/Pages/Contacto';
import {Cart} from './components/Cart';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
          <Navbar></Navbar>
          <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/productos" element={<ItemListContainer/>}></Route>
          <Route path="/category/:category" element={<ItemListContainer/>}></Route>
          <Route path="/Contacto" element={<Contacto/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
          </Routes>
          {/* <ItemListContainer></ItemListContainer>
          
          <ItemDetail/> */}
      </header>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
