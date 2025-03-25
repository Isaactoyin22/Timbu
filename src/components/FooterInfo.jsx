import { Link } from "react-router-dom";
import styles from "./FooterInfo.module.css";
import { FaCircle, FaTiktok } from "react-icons/fa"; // For social media icons

export default function FooterInfo() {
  return (
    <div className={styles.footerInfo}>
      <div className={styles.column}>
        <h3>TIMBU</h3>
        <p>
          We breathe life into pre-loved garments, transforming them into
          timeless expressions of style that echo whispers of the past.
        </p>
        <p>
          Welcome to TIMBU, a place where fashion has a heart, and your story
          unfolds with every attire you put on.
        </p>
        <div className={styles.socialLinks}>
          <a href="https://timbu.ng" target="_blank" rel="noopener noreferrer">
            <FaCircle />
            <span>TIMBU.ng</span>
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
            <span>Tiktok</span>
          </a>
        </div>
      </div>
      <div className={styles.column}>
        <h3>Shop</h3>
        <ul>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Customer support</h3>
        <ul>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/shipping">Shipping</Link>
          </li>
          <li>
            <Link to="/returns">Returns</Link>
          </li>
          <li>
            <Link to="/help-contact">Help & Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>About TIMBU</h3>
        <ul>
          <li>
            <Link to="/the-story">The story</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
