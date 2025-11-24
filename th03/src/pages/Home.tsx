import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { products } = useContext(ProductContext);
  const nav = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter((p) => {
    const matchName = p.ten.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = category === "" || p.danhMuc === category;
    const matchMinPrice = minPrice === "" || p.gia >= Number(minPrice);
    const matchMaxPrice = maxPrice === "" || p.gia <= Number(maxPrice);
    return matchName && matchCategory && matchMinPrice && matchMaxPrice;
  });

  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "12px" }}>Danh sách sản phẩm</h1>

      {/* NÚT THÊM SẢN PHẨM */}
      <button
        onClick={() => nav("/add")}
        style={{
          padding: "10px 16px",
          background: "#0ea5a4",
          border: "none",
          color: "white",
          borderRadius: "8px",
          fontWeight: "600",
          cursor: "pointer",
          marginBottom: "14px",
        }}
      >
        + Thêm sản phẩm
      </button>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <Filter
        category={category}
        setCategory={setCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />

      <ProductList products={paginatedProducts} />

      <Pagination
        currentPage={currentPage}
        totalItems={filteredProducts.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
