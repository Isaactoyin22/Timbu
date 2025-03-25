import AllItemContainer from "./AllItemContainer";
import AllItemsHeader from "./AllItemsHeader";

export default function AllItems({ category = "men" }) {
  return (
    <div>
      <AllItemsHeader />
      <AllItemContainer category={category} />
    </div>
  );
}
