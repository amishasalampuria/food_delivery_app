import {createContext, useEffect, useState} from 'react';
// import { food_list } from '../assets/frontend_assets/assets';
import axios from 'axios'

export const StoreContext = createContext(null);

export const StoreContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState({})
    const url = "https://food-delivery-backend-unx5.onrender.com"
    // const url = "http://localhost:4000"
    const [token, setToken] = useState("")
    const [food_list, setFoodList] = useState([])

    const addToCart = async (itemId)=>{
            if(!cartItems[itemId]){
                setCartItems((prev)=>({...prev, [itemId]:1}))
                // setCartItems([...StoreContext.itemId, {itemId:1}])
                // setCartItems(prevItems => ({ ...prevItems, [itemId]: 1 }));
            }
            else{
                setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1 }))
                // setCartItems([...StoreContext.itemId, {itemId:itemId+1}])
                // setCartItems(prevItems => ({ ...prevItems, [itemId]: prevItems[itemId] + 1 }));
            }

            if(token){
                await axios.post(url+'/api/cart/add', {itemId}, {headers:{token}})
            }

            // setCartItems(prevItems => {
            //     const updatedItems = { ...prevItems };
            //     if (!updatedItems[itemId]) {
            //         updatedItems[itemId] = 1;
            //     } else {
            //         updatedItems[itemId] += 1;
            //     }

               

            //     return updatedItems;
            // });

            
    }

    const removeFromCart = async (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
        // setCartItems([...StoreContext.itemId, {itemId:itemId-1}])
        // if (cartItems[itemId] > 1) {
        //     setCartItems(prevItems => ({ ...prevItems, [itemId]: prevItems[itemId] - 1 }));
        // } else {
        //     const updatedItems = { ...cartItems };
        //     delete updatedItems[itemId];
        //     setCartItems(updatedItems);
        // }

        // setCartItems(prevItems => {
        //     const updatedItems = { ...prevItems };
        //     if (updatedItems[itemId] > 1) {
        //         updatedItems[itemId] -= 1;
        //     } else {
        //         delete updatedItems[itemId];
        //     }
        //     return updatedItems;
        // });

        if(token){
            await axios.post(url +'/api/cart/remove', {itemId}, {headers:{token}})
        }
    }

    useEffect(()=>{
        console.log(cartItems)
    }, [cartItems])

    //test
    // for(const item in cartItems){
    //     console.log('item '+ item)
    //     console.log('value '+ cartItems[item])
    // }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + '/api/food/list')
        setFoodList(response.data.data)
        console.log("response.data ", response.data)
        console.log("response.data.data ", response.data.data)
        console.log('response ', response)
        console.log('response header ', response.headers)
        console.log('response userId', response.userId)
    }

    const loadCartData = async (token)=>{
        try {
            const response = await axios.post(url + '/api/cart/get', {}, { headers: { token } });
            setCartItems(response.data.cartData);
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.log('error.response.data',error.response.data);
                console.log('error.response.status',error.response.status);
                console.log('error.response.headers',error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                console.log('error.request',error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.log('Error', error.message);
            }
        }
        
    }


    useEffect(()=>{
        async function loadData(){
            await fetchFoodList()
            if(localStorage.getItem('token')){
                setToken(localStorage.getItem('token'))
                await loadCartData(localStorage.getItem('token'))
            }
        }
        loadData()
    },[])

    const contextValue ={
         //now we can access it anywhere
        food_list,     
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return(
        
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

