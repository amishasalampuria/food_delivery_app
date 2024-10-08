import { assets } from '../../assets/frontend_assets/assets';
import './FoodItem.css'
import {useContext, useState} from 'react'
import {StoreContext} from '../../context/StoreContext'
// import StoreContext from 'C:/Web_Development/zomato/src/context/StoreContext.js';


function FoodItem({_id, name, price, description, image}){
    const [itemCount, setItemCount] = useState(0);
    // const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
    const contextValue = useContext(StoreContext);
    // console.log("Context Value:", contextValue);

    // Ensure cartItems is defined before attempting to destructure
    // if (!cartItems) {
    //     // Handle the case where cartItems is undefined
    //     return <div>Loading...</div>; // Or any other appropriate handling
    // }
    return(
    
        <div className='food-item' >
            <div className='food-item-img-container'>
                {/* <img className='food-item-image' src={image} alt='' /> */}
                <img className='food-item-image' src={contextValue.url+"/images/"+image} alt='' />
                {/* {!itemCount
                ?<img  className='add' onClick={()=>{setItemCount(prev=>prev+1)}}  src={assets.add_icon_white} alt=''/>
                :<div className='food-item-counter'>
                    <img onClick={()=>{setItemCount(prev=>prev-1)}} src={assets.remove_icon_red} alt=''/>
                    <p>{itemCount}</p>
                    <img onClick={()=>{setItemCount(prev=>prev+1)}} src={assets.add_icon_green} alt=''/>
                 </div>
                
                }  */}
                {
                !contextValue.cartItems[_id] 
                ?<img  className='add' onClick={()=>contextValue.addToCart(_id)}  src={assets.add_icon_white} alt=''/>
                : contextValue.cartItems[_id] !== undefined && (<div className='food-item-counter'>
                    <img onClick={()=>contextValue.removeFromCart(_id)} src={assets.remove_icon_red} alt=''/>
                    <p>{contextValue.cartItems[_id]}</p>
                    <img onClick={()=>contextValue.addToCart(_id)} src={assets.add_icon_green} alt=''/>
                 </div>)
                
                }
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating' >
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='' />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>

        </div>
    
    )
}

export default FoodItem;