import { Link } from "react-router-dom";
import styles from "./FooterPolicy.module.css";

export default function FooterPolicy() {
  return (
    <div className={styles.footerPolicy}>
      <p className={styles.copyright}>©2024 TIMBU</p>
      <div className={styles.policyLinks}>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
      </div>
    </div>
  );
}
