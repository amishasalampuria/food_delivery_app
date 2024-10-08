import React, { useContext, useState } from 'react'
import './Home.css';

// import '../../components/Header/Header'
import Header from  '../../components/Header/Header.js'
// import ExploreMenu from 'C:/Web_Development/tomato/frontend/src/components/ExploreMenu/ExploreMenu.js'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.js'
import AppDownload from '../../components/AppDownload/AppDownload.js'

import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.js'

function Home(){
  const[category, setCategory] = useState("All")
  // const context = useContext(StoreContext)
  return (

     <div>
      <Header/>
      <ExploreMenu category={category}  setCategory={setCategory}/>
      
      <FoodDisplay category={category} />
     
      <AppDownload/>
     </div>
  )
}

export default Home;
