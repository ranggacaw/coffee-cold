import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact';
import MenuPage from './pages/Menu';
import CartPage from './pages/CartPage';
import DesktopNavbar from './components/Navbar';
import { useState } from 'react';


function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
  <Router>
    <DesktopNavbar cartCount={cartCount} setCartCount={setCartCount} />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/menu' element={<MenuPage cartCount={cartCount} setCartCount={setCartCount} />} />
      <Route path='/cart' element={<CartPage/>}/>
    </Routes> 
  </Router>
  );
}

export default App;
