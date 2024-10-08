import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function PlaceOrder(){

  const {getTotalCartAmount, token, food_list, cartItems, url} = useContext(StoreContext)
  const navigate = useNavigate()

  const[data, setData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setData({...data, [name]:value})

  }

 const placeOrder = async (e)=>{
    e.preventDefault()
    let orderItems = []
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        console.log('item', item)
        let itemInfo = item
        console.log('itemInfo before ',itemInfo)
        itemInfo["quantity"]=cartItems[item._id]
        orderItems.push(itemInfo)
        console.log('itemInfo',itemInfo)
      }
    })
    console.log('orderItems',orderItems)

    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2
    }

    console.log('orderData ', orderData)

    try {
      let response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });
      console.log('response ',response)
      if (response.data.success) {
        console.log("Message from api")
        toast.success("Order Placed!!");
        navigate('/myorders');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error("Error placing order. Please try again later.");
    }
  };
    

    // console.log('Order placed successfully:', response.data);
    // if(response.data.success){
    //   const {session_url} = response.data
    //   window.location.replace(session_url)
    // }
    // else{
    //         alert("Error")
    //       }



  //   try {
  //     const response = await axios.post(url + '/api/order/place', orderData, {headers:{token} });
  //     console.log('Order placed successfully:', response.data);
  //     // Handle other logic related to successful order placement
  //     if(response.data.success){
  //       const {session_url} = response.data
  //       window.location.replace(session_url)
  //     }
  //     else{
  //       alert("Error")
  //     }
  // } catch (error) {
  //     if (error.response) {
  //         // The request was made and the server responded with a status code
  //         console.log('Server responded with:', error.response.status);
  //         console.log('Response data:', error.response.data);
  //     } else if (error.request) {
  //         // The request was made but no response was received
  //         console.log('Request made but no response received:', error.request);
  //     } else {
  //         // Something happened in setting up the request that triggered an error
  //         console.log('Error:', error.message);
  //     }
  // }





 useEffect(()=>{
  if (!token || getTotalCartAmount() === 0) {
    navigate('/cart');
    }
},[token])

  return (
    <div>
      <form onSubmit={placeOrder} className='place-order'>
        <div className='place-order-left'>
          <p className='title'>Delivery Information</p>
          <div className='multi-fields'>
              <input required name='firstName' value={data.firstName} onChange={onChangeHandler} type='text' placeholder='First Name'/>
              <input required name='lastName' value={data.lastName} onChange={onChangeHandler} type='text' placeholder='Last Name'/>
          </div>

          <input required name='email' value={data.email} onChange={onChangeHandler} type='email' placeholder='Email address'/>
          <input required name='street' value={data.street} onChange={onChangeHandler} type='text' placeholder='Street'/>

          <div className='multi-fields'>
              <input required name='city' value={data.city} onChange={onChangeHandler} type='text' placeholder='City'/>
              <input required name='state' value={data.state} onChange={onChangeHandler} type='text' placeholder='State'/>
          </div>

          <div className='multi-fields'>
              <input required name='zipcode' value={data.zipcode} onChange={onChangeHandler} type='text' placeholder='Zip code'/>
              <input required name='country' value={data.country} onChange={onChangeHandler} type='text' placeholder='Country'/>
          </div>

          <input required name='phone' value={data.phone} onChange={onChangeHandler} type='text' placeholder='Phone'/>
        </div>


        <div className='place-order-right'>
        <div className='cart-totals'>
                  <h2>Cart Totals</h2>
                  <div>
                    <div className='cart-total-details'>
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className='cart-total-details'>
                        <p>Delivery Fee</p>
                        <p>${2}</p>
                    </div>
                    <hr/>
                    <div className='cart-total-details'>
                    <b>Total</b>
                    <b>${getTotalCartAmount()+2}</b>
                    </div>
                  </div>
                  <button type='Submit'>PROCEED TO PAYMENT</button>
              </div>
        </div>
      </form>
    </div>
  )
}


export default PlaceOrder
