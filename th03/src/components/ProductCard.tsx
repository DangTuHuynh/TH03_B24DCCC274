import { Product } from "../context/types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  const nav = useNavigate();

  const cardStyle = {
    border: "1px solid #ddd",
    padding: "12px",
    borderRadius: "10px",
    margin: "10px",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "600",
  };

  const priceStyle = {
    color: "#0f5132",
    fontWeight: "700",
    margin: "6px 0",
  };

  const btn = {
    padding: "6px 10px",
    marginRight: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    cursor: "pointer",
  };

  const btnEdit = {
    ...btn,
    background: "#0ea5a4",
    color: "#fff",
    border: "none",
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{product.ten}</h3>
      <p>{product.danhMuc}</p>
      <p style={priceStyle}>{product.gia.toLocaleString("vi-VN")} ₫</p>

      <button style={btn} onClick={() => nav(`/products/${product.id}`)}>
        Xem
      </button>

      <button style={btnEdit} onClick={() => nav(`/edit/${product.id}`)}>
        Sửa
      </button>
    </div>
  );
};

export default ProductCard;
