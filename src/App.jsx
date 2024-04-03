import './App.css';
import ItemListContainer from './components/ItemListContainer/index';
import NavBar from './components/NavBar/index';
import Cart from './components/Cart/index';
import ItemDetailContainer from './components/ItemDetailContainer/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
          <Routes>
            <Route  path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
            <Route path="/cart" element={< Cart/>}/>
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>} ></Route>
          </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
