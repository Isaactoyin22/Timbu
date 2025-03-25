import { useState } from "react";
import styles from "./filterSection.module.css";
import { FaCaretDown } from "react-icons/fa";
import FilterButtons from "./FilterButtons";
import { useFilterContext } from "./FilterContext";

export default function FilterSection() {
  const [showFilters, setShowFilters] = useState(false);
  const { filters, updateFilter } = useFilterContext();

  const selectedCategories = filters.categories || [];
  const priceRange = filters.priceRange || 50000;

  const handleFilterClick = (filter) => {
    if (selectedCategories.includes(filter)) {
      updateFilter(
        "categories",
        selectedCategories.filter((item) => item !== filter)
      );
    } else if (selectedCategories.length < 3) {
      updateFilter("categories", [...selectedCategories, filter]);
    }
  };

  const handlePriceChange = (e) => {
    updateFilter("priceRange", Number(e.target.value));
  };

  return (
    <div className={styles.filterSection}>
      <div className={styles.hide}>
        <FilterButtons
          selectedFilters={selectedCategories}
          handleFilterClick={handleFilterClick}
        />
      </div>
      <button
        className={styles.filterButton}
        onClick={() => setShowFilters(!showFilters)}
      >
        <FaCaretDown /> Filters
      </button>
      {showFilters && (
        <div className={styles.filterOptions}>
          <div className={styles.priceRange}>
            <label>Price Range: N1,000 - N{priceRange.toLocaleString()}</label>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={priceRange}
              onChange={handlePriceChange}
            />
          </div>
          <div className={styles.hidden}>
            <FilterButtons
              selectedFilters={selectedCategories}
              handleFilterClick={handleFilterClick}
            />
          </div>
          <button
            className={`${styles.button} ${
              selectedCategories.includes("Jeans") ? styles.selected : ""
            }`}
            onClick={() => handleFilterClick("Jeans")}
            disabled={
              selectedCategories.length >= 3 &&
              !selectedCategories.includes("Jeans")
            }
          >
            Jeans
          </button>
          <button
            className={`${styles.button} ${
              selectedCategories.includes("Hoodie") ? styles.selected : ""
            }`}
            onClick={() => handleFilterClick("Hoodie")}
            disabled={
              selectedCategories.length >= 3 &&
              !selectedCategories.includes("Hoodie")
            }
          >
            Hoodie
          </button>
          <button
            className={`${styles.button} ${
              selectedCategories.includes("Skirts") ? styles.selected : ""
            }`}
            onClick={() => handleFilterClick("Skirts")}
            disabled={
              selectedCategories.length >= 3 &&
              !selectedCategories.includes("Skirts")
            }
          >
            Skirts
          </button>
          <button
            className={`${styles.button} ${
              selectedCategories.includes("Gowns") ? styles.selected : ""
            }`}
            onClick={() => handleFilterClick("Gowns")}
            disabled={
              selectedCategories.length >= 3 &&
              !selectedCategories.includes("Gowns")
            }
          >
            Gowns
          </button>
        </div>
      )}
    </div>
  );
}
