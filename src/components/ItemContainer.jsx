import AddToCart from "./AddToCart";
import ItemTags from "./ItemTags";
import styles from "./ItemContainer.module.css";
import { useCartContext } from "./CartContext"; // Import useCartContext

export default function ItemContainer({ imageSrc, name, price, id }) {
  const { addToCart } = useCartContext(); // Access addToCart from CartContext

  const handleAddToCart = () => {
    const item = { imageSrc, name, price, id }; // Now id is defined from props
    addToCart(item);
  };

  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt={name} className={styles.productImage} />
        <AddToCart onAddToCart={handleAddToCart} />
      </div>
      <ItemTags name={name} price={price} />
    </div>
  );
}
