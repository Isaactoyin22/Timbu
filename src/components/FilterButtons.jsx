import styles from "./FilterButton.module.css";

export default function FilterButtons({ selectedFilters, handleFilterClick }) {
  const buttonLabels = [
    "All",
    "New arrivals",
    "Trending",
    "Shorts",
    "Suit",
    "Shoes",
    "Jackets",
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
