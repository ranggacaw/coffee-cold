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
import { useEffect, useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebaseConfig";


function App() {
  const [cartCount, setCartCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null)

  // buat handleLogout, jadi kalo user Logout, setLoggedIn jadi false. kalo belom logout, setLoggedIn jadi true
  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setLoggedIn(true);
        setUser(currentUser); // Save the user object

      } else {
        setLoggedIn(false);
        setUser(null);
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false); // Update the logged-in state
      setUser(null); // Store user information

      console.log("Logout successful");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
  <Router>
    <DesktopNavbar 
      loggedIn={loggedIn} 
      handleLogout={handleLogout} 
      cartCount={cartCount} 
      user={user} // user information
      setCartCount={setCartCount} 
    />
    <Routes>
        {/* All pages accessible */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setUser={setUser} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<MenuPage cartCount={cartCount} setCartCount={setCartCount} />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes> 
  </Router>
  );
}

export default App;
