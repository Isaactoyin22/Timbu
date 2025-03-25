import { useEffect, useContext, useMemo } from "react";
import ItemContainer from "./ItemContainer";
import JeansImage from "../assets/Rectangle 53.svg";
import CorporateImage from "../assets/Rectangle 53(2).svg";
import PlainHoodieImage from "../assets/WIDE-LEG WOOL TROUSERS 1.svg";
import VintageImage from "../assets/WIDE-LEG WOOL TROUSERS 2.svg";
import ShortSleeveImage from "../assets/WIDE-LEG WOOL TROUSERS 1 (1).svg";
import GreyShortImage from "../assets/WIDE-LEG WOOL TROUSERS 1 (2).svg";
import RneckImage from "../assets/Rectangle 53(1).svg";
// import BluejeansImage from "../assets/Rectangle 53(3).svg";
// import HighWaistedJeanImage from "../assets/rectangle 53(10).svg";
// import DenimMiniShortImage from "../assets/rectangle 53(9).svg";
// import StylishCropTopImage from "../assets/WIDE-LEG WOOL TROUSERS 1 (4).svg";
// import CropTopLuxuryImage from "../assets/WIDE-LEG WOOL TROUSERS 1 (3).svg";
// import VintageShirtImage from "../assets/rectangle 53 (6).svg";
// import FittedGownImage from "../assets/rectangle 53 (7).svg";
// import ALineGownImage from "../assets/rectangle 53 (8).svg";
import styles from "./AllItemContainer.module.css";
import { useProductContext } from "./ProductContext";
import { SearchContext } from "./searchContext";
import { useFilterContext } from "./FilterContext";

export default function AllItemContainer({ category = "men" }) {
  const { setTotalProduct, product, handleLoadMore } = useProductContext();
  const { searchTerm } = useContext(SearchContext);
  const { filters } = useFilterContext();

  const products = [
    // Men's Products
    {
      id: 1,
      imageSrc: JeansImage,
      name: "Reclaimed Vintage Men Loose Fit Jean in Vintage Mid Blue",
      price: "N4,000",
      category: "men",
      type: "Jeans",
    },
    {
      id: 2,
      imageSrc: PlainHoodieImage,
      name: "Plain Grey Unisex Hoodie All Sizes Available",
      price: "N8,500",
      category: "men",
      type: "Hoodie",
    },
    {
      id: 3,
      imageSrc: VintageImage,
      name: "Reclaimed Vintage Men Loose Fit Trousers in Plain Black",
      price: "N4,500",
      category: "men",
      type: "Trousers",
    },
    {
      id: 4,
      imageSrc: ShortSleeveImage,
      name: "Men's Short Sleeve Round Neck T-Shirt All Sizes Available",
      price: "N6,000",
      category: "men",
      type: "T-Shirt",
    },
    {
      id: 5,
      imageSrc: GreyShortImage,
      name: "Dark Grey Summer Short and Beach Wear All Sizes Available",
      price: "N5,000",
      category: "men",
      type: "Shorts",
    },
    {
      id: 6,
      imageSrc: RneckImage,
      name: "Osec Signature Men's Quality R-Neck V-Neck T-Shirts Long Sleeve All Sizes Available",
      price: "N6,000",
      category: "men",
      type: "T-Shirt",
    },
    {
      id: 7,
      imageSrc: CorporateImage,
      name: "Men's Corporate Suit: Brown Carton Colour All Sizes Available",
      price: "N42,000",
      category: "men",
      type: "Suit",
    },
    {
      id: 8,
      imageSrc: JeansImage,
      name: "Sky Stock Blue Jean For Men W34 L42",
      price: "N14,500",
      category: "men",
      type: "Jeans",
    },
    // Women's Products
    // {
    //   id: 9,
    //   imageSrc: HighWaistedJeanImage,
    //   name: "High Waisted Jean For Ladies - W27 L37",
    //   price: "N10,000",
    //   category: "women",
    //   type: "Jeans",
    // },
    // {
    //   id: 10,
    //   imageSrc: PlainHoodieImage,
    //   name: "Plain Grey Unisex Hoodie All Sizes Available",
    //   price: "N8,500",
    //   category: "women",
    //   type: "Hoodie",
    // },
    // {
    //   id: 11,
    //   imageSrc: DenimMiniShortImage,
    //   name: "Denim High Waist Mini Hip Short - W25 L37",
    //   price: "N14,000",
    //   category: "women",
    //   type: "Skirts",
    // },
    // {
    //   id: 12,
    //   imageSrc: StylishCropTopImage,
    //   name: "Stylish Crop Top - Top For Ladies",
    //   price: "N8,500",
    //   category: "women",
    //   type: "Top",
    // },
    // {
    //   id: 13,
    //   imageSrc: CropTopLuxuryImage,
    //   name: "Crop Top Stylish Luxury Top For Ladies - Pink",
    //   price: "N5,000",
    //   category: "women",
    //   type: "Top",
    // },
    // {
    //   id: 14,
    //   imageSrc: VintageShirtImage,
    //   name: "Ladies Vintage Shirts - Beach White Sleeve Fashion",
    //   price: "N12,000",
    //   category: "women",
    //   type: "Shirt",
    // },
    // {
    //   id: 15,
    //   imageSrc: FittedGownImage,
    //   name: "Fitted Corporate Gown",
    //   price: "N7,000",
    //   category: "women",
    //   type: "Gowns",
    // },
    // {
    //   id: 16,
    //   imageSrc: ALineGownImage,
    //   name: "Ladies Free A-Line Gown - Green",
    //   price: "N8,000",
    //   category: "women",
    //   type: "Gowns",
    // },
  ];

  const parsePrice = (price) =>
    parseFloat(price.replace("N", "").replace(",", ""));

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory = item.category === category;

      const matchesSearch = searchTerm
        ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const matchesType =
        filters.categories && filters.categories.length > 0
          ? filters.categories.includes(item.type)
          : true;

      const matchesPrice = () => {
        const itemPrice = parsePrice(item.price);

        const maxPrice =
          filters.priceRange !== undefined ? filters.priceRange : 50000;
        return itemPrice <= maxPrice;
      };

      return matchesCategory && matchesSearch && matchesType && matchesPrice();
    });
  }, [category, searchTerm, filters, products]);

  useEffect(() => {
    setTotalProduct(filteredProducts.length);
  }, [setTotalProduct, filteredProducts.length]);

  return (
    <>
      {filteredProducts.length > 0 ? (
        <>
          <div className={styles.allItemContainer}>
            {filteredProducts.slice(0, product).map((item) => (
              <ItemContainer
                key={item.id}
                imageSrc={item.imageSrc}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            ))}
          </div>
          <div className={styles.loadMoreSection}>
            <p>
              You've viewed {product} of {filteredProducts.length} products
            </p>
            <button
              onClick={handleLoadMore}
              disabled={product >= filteredProducts.length}
            >
              Load more
            </button>
          </div>
        </>
      ) : (
        <div className={styles.noProducts}>
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <p>
            No products available for this category, search term, or filter.
          </p>
        </div>
      )}
    </>
  );
}
