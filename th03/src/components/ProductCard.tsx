import { Product } from "../context/types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  const nav = useNavigate();

  return (
    <div style={{ border: "1px solid #ddd", padding: "8px", margin: "8px" }}>
      <h3>{product.ten}</h3>
      <p>{product.danhMuc}</p>
      <button onClick={() => nav(`/products/${product.id}`)}>Xem</button>
      <button onClick={() => nav(`/edit/${product.id}`)}>Sửa</button>
    </div>
  );
};

export default ProductCard;
