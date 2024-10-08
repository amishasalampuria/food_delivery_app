import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './../src/pages/Home/Home.js';
import Cart from './../src/pages/Cart/Cart.js';
import PlaceOrder  from './pages/PlaceOrder/PlaceOrder.js';
import NotFound from './pages/NotFound.js';
import Footer from './../src/components/Footer/Footer.js'
import LoginPopUp from './components/LoginPopUp/LoginPopUp.js';
import MyOrders from './pages/MyOrders/MyOrders.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const[showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
   <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/myorders' element={<MyOrders/>} />
        <Route path="*"  element={<NotFound/>} />
      </Routes>
      <ToastContainer/>
   </div>
   <Footer/>
   </>
  );
}

export default App;





// zxc@gmail.com
// Abcdefg123
// 12345678