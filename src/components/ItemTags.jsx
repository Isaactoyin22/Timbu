import styles from "./ItemTags.module.css";

export default function ItemTags({ name, price }) {
  return (
    <div className={styles.itemTags}>
      <p className={styles.productName}>{name}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
}
