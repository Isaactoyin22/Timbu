import Modal from "./Modal";
import { useCartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./CartModal.module.css";
import { FaTrash } from "react-icons/fa";

export default function CartModal({ isOpen, onClose }) {
  const { cartItems, removeFromCart } = useCartContext();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("N", "").replace(",", ""));
        return total + price * item.quantity;
      }, 0)
      .toLocaleString("en-NG", { style: "currency", currency: "NGN" });
  };
  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.cartModal}>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemDetails}>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <div
                      className={styles.removeIcon}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cartSummary}>
              <h3>Total: {calculateTotal()}</h3>
              <button
                className={styles.checkoutButton}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
