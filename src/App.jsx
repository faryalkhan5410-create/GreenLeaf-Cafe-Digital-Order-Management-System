
import menuItems from "./data/data.js";
import {useState} from "react"
import { ShoppingCart, Plus } from "lucide-react";
import MenuList from "./components/MenuList/MenuList.jsx";
import "./App.css";

function App() {
  const [order, setOrder]=useState([]);

  const addToOrder=(item)=>{
    setOrder((currentOrder)=>{
      const existingItem=currentOrder.find(
        (orderItem)=> orderItem.id ===item.id //whether item exist or not
      );



      if(existingItem)
        { //if item exist
        return currentOrder.map((orderItem)=> // map updates the quantity by 1
          orderItem.id===item.id
        ? {... orderItem,quantity: orderItem.quantity + 1}
        : orderItem
    );
      }

      return[...currentOrder,{...item, quantity: 1}]; //if item doesnt exist before
    });
  };
  const removeFromOrder = (itemId) => {
  setOrder((currentOrder) =>
    currentOrder
      .map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};
//orderSection
const totalPrice=order.reduce(
  (total,item)=>total+item.price*item.quantity,0
);
  //UI
  return (
    <div className="app">
      <header className="header">
        <h1>🌿 GreenLeaf Cafe</h1>
        <p>Digital Order Management</p>
      </header>

      <main className="layout">
        <MenuList // passing props
        items={menuItems}
        onAdd={addToOrder}
        />
        <aside className="summary" aria-label="Current order"> 
          <h2>
            <ShoppingCart size={22} aria-hidden="true"/>
            Current Order
          </h2>

          {order.length===0? (
            <p className="empty">Your Order is empty</p>
          ) : (
            
order.map((item) => (
  <div className="order-item" key={item.id}>
    <div>
      <h3>{item.name}</h3>
      <p>
        Rs. {item.price} × {item.quantity}
      </p>
    </div>

    <button
      className="remove-btn"
      onClick={() => removeFromOrder(item.id)}
    >
      Remove
    </button>
  </div>
))

          )}
          <div className="total">
            <h3>Total Price</h3>
            <h2>Rs. {totalPrice}</h2>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
