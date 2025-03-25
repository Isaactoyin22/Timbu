import { useProductContext } from "./ProductContext";

export default function AllItemsHeader() {
  const { totalProduct } = useProductContext();

  return (
    <div>
      <h1>All Items</h1>
      <p>{totalProduct} items</p>
    </div>
  );
}
