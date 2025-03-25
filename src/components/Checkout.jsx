import { useState } from "react";
import { useCartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css";

export default function Checkout() {
  const { cartItems, clearCart } = useCartContext();
  const navigate = useNavigate();

  // State for buyer information
  const [buyerInfo, setBuyerInfo] = useState({
    address: "42 Westend Road, Beckington AVENUE, Lagos",
    phone: "0813 857 3833",
    email: "linwhit.full@gmail.com",
  });

  // State for delivery information
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    town: "",
    address: "",
  });

  // State for delivery method
  const [deliveryMethod, setDeliveryMethod] = useState(null); // "pickup" or "standard"

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBuyerInfoChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const isFormValid = () => {
    return (
      formData.state.trim() !== "" &&
      formData.city.trim() !== "" &&
      formData.town.trim() !== "" &&
      formData.address.trim() !== "" &&
      buyerInfo.address.trim() !== "" &&
      buyerInfo.phone.trim() !== "" &&
      buyerInfo.email.trim() !== "" &&
      deliveryMethod !== null
    );
  };

  const calculateSubtotal = () => {
    const subtotal = cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("N", "").replace(",", ""));
      return total + price * item.quantity;
    }, 0);
    return subtotal;
  };

  const getDeliveryFee = () => {
    if (deliveryMethod === "standard") {
      return 1500; // N1,500 for standard delivery
    }
    return 0; // Free for pickup
  };

  const calculateTotalWithDelivery = () => {
    const subtotal = calculateSubtotal();
    const deliveryFee = getDeliveryFee();
    return (subtotal + deliveryFee).toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
    });
  };

  const handlePay = () => {
    if (isFormValid()) {
      // Generate a random order number (for demo purposes)
      const orderNumber = Math.floor(Math.random() * 100000).toString();

      // Calculate estimated delivery date (e.g., 5 days from today if standard delivery, 2 days if pickup)
      const today = new Date();
      const deliveryDays = deliveryMethod === "standard" ? 5 : 2;
      const deliveryDate = new Date(
        today.setDate(today.getDate() + deliveryDays)
      );
      const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      // Construct delivery address
      const deliveryAddress = `${formData.address}, ${formData.town}, ${formData.city}, ${formData.state}`;

      // Navigate to the confirmation page with order details
      navigate("/confirmation", {
        state: {
          orderDetails: {
            orderNumber,
            estimatedDelivery: formattedDeliveryDate,
            deliveryAddress,
            items: cartItems,
            deliveryFee: getDeliveryFee().toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            }),
            subtotal: calculateSubtotal().toLocaleString("en-NG", {
              style: "currency",
              currency: "NGN",
            }),
            total: calculateTotalWithDelivery(),
          },
        },
      });

      // Clear the cart after successful payment
      clearCart();
    } else {
      alert("Please fill in all required fields and select a delivery method.");
    }
  };

  return (
    <div className={styles.checkout}>
      <h1>Checkout</h1>
      <div className={styles.checkoutContainer}>
        {/* Left Section: Buyer and Delivery Information */}
        <div className={styles.leftSection}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Buyer Information</h2>
              <button className={styles.editButton}>Edit</button>
            </div>
            <label>
              Address
              <input
                type="text"
                name="address"
                value={buyerInfo.address}
                onChange={handleBuyerInfoChange}
                placeholder=""
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                name="phone"
                value={buyerInfo.phone}
                onChange={handleBuyerInfoChange}
                placeholder=""
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={buyerInfo.email}
                onChange={handleBuyerInfoChange}
                placeholder=""
              />
            </label>
          </div>

          <div className={styles.section}>
            <h2>Delivery Information</h2>
            <label>
              State
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder=""
              />
            </label>
            <label>
              City
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder=""
              />
            </label>
            <label>
              Town
              <input
                type="text"
                name="town"
                value={formData.town}
                onChange={handleInputChange}
                placeholder=""
              />
            </label>
            <label>
              Address
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder=""
              />
            </label>
          </div>

          <div className={styles.section}>
            <h2>Delivery Method</h2>
            <label>
              <input
                type="radio"
                name="deliveryMethod"
                value="pickup"
                checked={deliveryMethod === "pickup"}
                onChange={handleDeliveryMethodChange}
              />
              Pickup (Free)
            </label>
            <p>Available for pickup in 2 days.</p>
            <label>
              <input
                type="radio"
                name="deliveryMethod"
                value="standard"
                checked={deliveryMethod === "standard"}
                onChange={handleDeliveryMethodChange}
              />
              Standard delivery (N1,500)
            </label>
            <p>Delivered within 5 days.</p>
          </div>
        </div>

        {/* Right Section: Order Total */}
        <div className={styles.rightSection}>
          <div className={styles.sectionHeader}>
            <h2>Order Total</h2>
            <button className={styles.editButton}>Edit</button>
          </div>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.orderItem}>
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className={styles.orderImage}
                  />
                  <div className={styles.orderDetails}>
                    <p>{item.name}</p>
                    <p>W34 L42</p>
                    <p>Qty: {item.quantity}</p>
                    <p>{item.price}</p>
                  </div>
                </div>
              ))}
              <div className={styles.orderSummary}>
                <p>{cartItems.length} items</p>
                <p>
                  {calculateSubtotal().toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </p>
              </div>
              <div className={styles.orderSummary}>
                <p>Delivery</p>
                <p>
                  {getDeliveryFee().toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </p>
              </div>
              <div className={styles.orderSummary}>
                <p>Total to pay</p>
                <p>{calculateTotalWithDelivery()}</p>
              </div>
              <button
                className={styles.payButton}
                onClick={handlePay}
                disabled={!isFormValid()}
              >
                Pay
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
