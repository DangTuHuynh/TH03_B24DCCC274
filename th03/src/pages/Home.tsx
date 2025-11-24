import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

const Home = () => {
  const { products } = useContext(ProductContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <Filter
        category={category}
        setCategory={setCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />

      <ProductList products={products} />

      <Pagination
        currentPage={currentPage}
        totalItems={products.length}
        itemsPerPage={6}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
