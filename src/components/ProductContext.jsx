import { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [product, setProduct] = useState(0); // Viewed products
  const [totalProduct, setTotalProduct] = useState(0); // Total products (updated dynamically)

  const handleLoadMore = () => {
    setProduct((prev) => Math.min(prev + 4, totalProduct));
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        setProduct,
        totalProduct,
        setTotalProduct,
        handleLoadMore,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
