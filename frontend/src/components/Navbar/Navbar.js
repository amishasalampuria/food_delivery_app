import React, { useContext } from 'react'
import './Navbar.css'
// import logo from 'C:/Web_Development/zomato/src/assets/frontend_assets/logo.png'
// import logo from 'C:/Web_Development/zomato/frontend/src/assets/frontend_assets/Zomato-Logo.png';
import logo from '../../assets/frontend_assets/logo.png'
import search_icon from '../../assets/frontend_assets/search_icon.png';
import basket_icon from '../../assets/frontend_assets/basket_icon.png';
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {StoreContext} from '../../context/StoreContext'
import { assets } from '../../assets/frontend_assets/assets';
  function Navbar({setShowLogin}){
  const[menu, setMenu] = useState("Home")
  const {getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()
  const logout = () =>{
    localStorage.removeItem("token");
    setToken("")
    navigate('/')
  }
  return (
    <>
    <div className='navbar'>
      <Link to='/' ><img src={logo} alt="" className='logo'/></Link>

      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu('Home')} className={menu==='Home'?"active":""}>Home</Link >
        <a href='#explore-menu'  onClick={()=>setMenu('Menu')} className={menu==='Menu'?"active":""}>Menu</a >
        <a href='#app-download' onClick={()=>setMenu('Mobile-app')} className={menu==='Mobile-app'?"active":""}>Mobile-app</a >
        <a href='#footer' onClick={()=>setMenu('Contact Us')} className={menu==='Contact Us'?"active":""}>Contact Us</a>
      </ul>

      <div className='navbar-right'>
        <img src={search_icon} alt=""/>
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={basket_icon} alt=""/></Link>
            <div className={getTotalCartAmount()?'dot':''} ></div>
        </div>

        {!token?<button onClick={()=>setShowLogin(true)}>Sign Up</button>
        :<div className='navbar-profile'>
             <img src={assets.profile_icon} alt='' />
             <ul className='navbar-profile-dropdown'>
              <li onClick={()=>navigate('/myorders')} > <img src={assets.bag_icon} alt=''/><p>Orders</p> </li>
                <hr/>
              <li onClick={logout}><img src={assets.logout_icon} alt=''/><p>LogOut</p></li>
             </ul>
        </div>
       }
        
      </div>

    </div>
   
    </>
  )
}

export default Navbar;
