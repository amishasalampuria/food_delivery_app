import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'

import './LoginPopUp.css';
import {useContext, useEffect, useState} from 'react'

function LoginPopUp({setShowLogin}){

    const {url, setToken} = useContext(StoreContext)

    const [currState, setCurrState] = useState("Sign up");
    const [data, setData] = useState({
        "name": '',
        "email":'',
        "password":''
    });
    
    const onChangeHandler  = (e) =>{
      const name =  e.target.name;
      const value = e.target.value;
      setData(data=>({...data, [name]:value }))
    }

    // useEffect(()=>{
    //     console.log(data)
    // },[data])

    const onLogin = async (event) =>{

        event.preventDefault();

        let newURL = url;

        if(currState==="Login"){
            newURL += "/api/user/login"
        }
        else{
            newURL += "/api/user/register"
        }

        const response = await axios.post(newURL, data);
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        }else{
            alert(response.data.message)
        }
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin}  className='login-popup-container'>
                <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
                </div>
                <div className='login-popup-inputs'>
                    {currState==='Login'?<></>:<input name='name' onChange={onChangeHandler}  value={data.name} type='text'  placeholder='Your Name' required/>}
                    <input type='email' name='email' onChange={onChangeHandler}  value={data.email}  placeholder='Your Mail' required/>
                    <input type='password' name='password' onChange={onChangeHandler}  value={data.password} placeholder='Your Password' required/>
                </div>
                <button type='Submit'>{currState==='Sign up'?"Create Account":"Login"}</button>
                <div  className='login-popup-condition'>
                    <input type='checkbox' required/>
                    <p>By clicking, I agree to terms of use and privacy policy.</p>
                </div>
                {currState==='Login'
                ?<p>Creat account? <span onClick={()=>{setCurrState('Sign up')}}> Click here</span></p>
                :<p>Already have an account? <span onClick={()=>{setCurrState('Login')}}>Login here</span></p>
                }
                
                
            </form>
        </div>
    )
}

export default LoginPopUp;