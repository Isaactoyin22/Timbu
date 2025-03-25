import styles from "./AddToCart.module.css";
import { useCartContext } from "./CartContext";
import { FaShoppingBag } from "react-icons/fa";

export default function AddToCart({ onAddToCart }) {
  const { addToCart } = useCartContext();

  const handleClick = () => {
    if (onAddToCart) {
      onAddToCart();
    }
  };

  return (
    <button className={styles.addToCart} onClick={handleClick}>
      <FaShoppingBag />
    </button>
  );
}
