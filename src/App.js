
import './App.css';
import Navbar from'./components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar></Navbar>
          <ItemListContainer mensaje="Hola, soy un mensaje"></ItemListContainer>
      </header>
    </div>
  );
}

export default App;
