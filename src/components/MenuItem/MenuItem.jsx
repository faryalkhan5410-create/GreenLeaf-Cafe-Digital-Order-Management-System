import React from 'react'
import {Plus} from "lucide-react";
import styles from "./MenuItem.module.css"
const MenuItem = ({item, onAdd}) => {
  return (
    <div className='styles.card'>
      <div>
        <span className={styles.card}>
{item.category || item.categories}
        </span>
        <h3>{item.name}</h3>
        <p>Rs. {item.price}</p>
      </div>

      <button onClick={()=> onAdd(item)}>
        <Plus size={17}/>
      </button>
    </div>
  );
}

export default MenuItem
