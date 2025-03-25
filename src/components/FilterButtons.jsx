import styles from "./FilterButton.module.css";

export default function FilterButtons({ selectedFilters, handleFilterClick }) {
  const buttonLabels = [
    "All",
    "New arrivals",
    "Under 5k",
    "Jeans",
    "T-shirt",
    "Shoes",
    "Formals",
    "Hats",
  ];

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
