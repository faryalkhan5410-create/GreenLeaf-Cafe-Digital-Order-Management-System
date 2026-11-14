import MenuItem from "../MenuItem/MenuItem";
import styles from "./MenuList.module.css"

function MenuList({items, onAdd})
{
    return(
        <section className={styles.menu}>
            <h2>Our Menu</h2>
            <p className={styles.description}>
                Select the Item
            </p>
            <div className={styles.grid}>
                {items.map((item)=>
                (<MenuItem 
                key={item.id || item.name}
                item={item}
                onAdd={onAdd}
                />


                ))}
            </div>
        </section>
        
    );
}export default MenuList;