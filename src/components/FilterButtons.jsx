import { useFilterContext } from "./FilterContext";
import styles from "./FilterButton.module.css";

export default function FilterButtons() {
  const { filters, updateFilter } = useFilterContext();
  const selectedFilters = filters.categories || [];

  const buttonLabels = [
    "All",
    "New arrivals",
    "Shorts",
    "Jeans",
    "Shirt",
    "Shoes",
    "Formals",
    "Hats",
  ];

  const handleFilterClick = (label) => {
    if (selectedFilters.includes(label)) {
      updateFilter(
        "categories",
        selectedFilters.filter((item) => item !== label)
      );
    } else if (selectedFilters.length < 3) {
      updateFilter("categories", [...selectedFilters, label]);
    }
  };

  return (
    <>
      {buttonLabels.map((label) => (
        <button
          key={label}
          className={`${styles.button} ${
            selectedFilters.includes(label) ? styles.selected : ""
          }`}
          onClick={() => handleFilterClick(label)}
          disabled={
            selectedFilters.length >= 3 && !selectedFilters.includes(label)
          }
        >
          {label}
        </button>
      ))}
    </>
  );
}
