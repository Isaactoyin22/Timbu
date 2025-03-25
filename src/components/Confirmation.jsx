import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Confirmation.module.css";

export default function Confirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Default to empty values if state is not provided
  const orderDetails = state?.orderDetails || {
    orderNumber: "46756",
    estimatedDelivery: "12 July 2024",
    deliveryAddress: "12 Beckford Street, Ijupeju, Lagos",
    items: [],
    subtotal: "N0",
    deliveryFee: "N0",
    total: "N0",
  };

  // Redirect to home if no order details are provided
  if (!state?.orderDetails) {
    navigate("/");
    return null;
  }

  return (
    <div className={styles.confirmationContainer}>
      <div className={styles.confirmationCard}>
        <h1>THANK YOU FOR YOUR ORDER</h1>
        <p>We’ve sent you an email with your order confirmation and receipt</p>
        <h2>Order Number #{orderDetails.orderNumber}</h2>
        <p>
          Estimated Delivery by{" "}
          <strong>{orderDetails.estimatedDelivery}</strong>,{" "}
          {orderDetails.deliveryAddress}
        </p>
        <h3>{orderDetails.items.length} Item(s)</h3>
        <div className={styles.itemsList}>
          {orderDetails.items.map((item) => (
            <div key={item.id} className={styles.item}>
              <img
                src={item.imageSrc}
                alt={item.name}
                className={styles.itemImage}
              />
              <div className={styles.itemDetails}>
                <h4>{item.name}</h4>
                <p>W34 L42</p>
                <p>{item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.orderSummary}>
          <p>Subtotal</p>
          <p>{orderDetails.subtotal}</p>
        </div>
        <div className={styles.orderSummary}>
          <p>Delivery Fee</p>
          <p>{orderDetails.deliveryFee}</p>
        </div>
        <div className={styles.orderSummary}>
          <p>Total</p>
          <p>{orderDetails.total}</p>
        </div>
        <div className={styles.links}>
          <a href="/returns">Returns Policy</a>
          <a href="/account">My Account</a>
        </div>
      </div>
    </div>
  );
}
