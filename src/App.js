import './App.css';
import Navbar from'./components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
          <Navbar></Navbar>
          <ItemListContainer></ItemListContainer>
          
          <ItemDetail/>
      </header>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
