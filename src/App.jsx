import React from 'react'
import{useState} from "react"
import MenuItems from './data/data.js'
import MenuList from './components/MenuList/MenuList.jsx'


import menuItems from './data/data.js'
const App = () => {
  const[order, setOrder] =useState([]); // storing selected items in one array

  const addToOrder= (item)=>
  {

  }
  const removeFromOrder = (itemId)=>{

  }
  return (
    <div className={styles.app}>
      <MenuList
      items={menuItems}
     // onAdd={addToOrder}
      />

      
    </div>
  )
}
export default App
