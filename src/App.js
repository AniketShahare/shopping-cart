
import './App.css';
import Navbar from "./Components/Navbar"
import ProductCard from "./Components/ProductCard"
import CartPage from './Components/CartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>

   <div className="App">
     <Navbar/>
     <Routes>
      <Route exact path='/' element= {<ProductCard/>}/>
      <Route path='/cart' element= {<CartPage/>}/>
     </Routes>
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
