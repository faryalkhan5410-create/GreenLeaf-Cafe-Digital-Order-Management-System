
import { Plus } from "lucide-react";
import styles from "./MenuItem.module.css";

function MenuItem({ item, onAdd }) {
  return (
    <div className={styles.card}>
      <div>
        <span className={styles.category}>
          {item.category}
        </span>

        <h3>{item.name}</h3>
        <p>Rs. {item.price}</p>
      </div>

      <button onClick={() => onAdd(item)}>
        <Plus size={17} />
        Add to Order
      </button>
    </div>
  );
}

export default MenuItem;
