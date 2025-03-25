import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: 50000,
  });

  const updateFilter = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  };

  return (
    <FilterProvider>
      <FilterSection />

      <FilterButtons />
    </FilterProvider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
