import './App.css';
import Navbar from'./components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ItemListContainer from './components/ItemListContainer'
import {ItemList} from './components/ItemList'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar></Navbar>
          <ItemListContainer></ItemListContainer>
          <ItemList/>
          <ItemDetailContainer></ItemDetailContainer>
      </header>
      
      
    </div>
  );
}

export default App;
