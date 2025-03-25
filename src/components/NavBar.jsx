import { useContext, useState } from "react";
import { SearchContext } from "./SearchContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { FaUser, FaShoppingBag, FaCheckCircle } from "react-icons/fa";
import { useCartContext } from "./CartContext";
import CartModal from "./CartModal";
import { useAuth } from "./AuthContext";

export default function NavBar() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { cartItems } = useCartContext();
  const [activeLink, setActiveLink] = useState("men");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleCheckoutClick = () => {
    navigate("/checkout");
  };

  const handleUserClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>TIMBU</h1>
        <div className={styles.links}>
          <Link
            to="/men"
            className={activeLink === "men" ? styles.active : styles.inactive}
            onClick={() => handleLinkClick("men")}
          >
            Men
          </Link>
          <Link
            to="/women"
            className={activeLink === "women" ? styles.active : styles.inactive}
            onClick={() => handleLinkClick("women")}
          >
            Women
          </Link>
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search for items"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.icons}>
          <div className={styles.userIcon} onClick={handleUserClick}>
            <FaUser />
          </div>
          <div className={styles.cartIcon} onClick={handleCartClick}>
            <FaShoppingBag />
            {cartItems.length > 0 && (
              <span className={styles.cartCount}>{cartItems.length}</span>
            )}
          </div>
          <div className={styles.checkoutIcon} onClick={handleCheckoutClick}>
            <FaCheckCircle />
          </div>
        </div>
      </nav>
      <CartModal isOpen={isCartOpen} onClose={handleCloseCart} />
    </>
  );
}
