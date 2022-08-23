import logo from './logo.svg';
import './App.css';
import Navbar from'./components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import WidgetCart from './components/Cart/CartWidget';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar></Navbar>
          <ItemListContainer></ItemListContainer>
      </header>
    
    </div>
  );
}

export default App;
