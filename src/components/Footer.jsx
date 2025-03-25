import FooterInfo from "./FooterInfo";
import FooterPolicy from "./FooterPolicy";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterInfo />
      <FooterPolicy />
    </footer>
  );
}
