import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Không tìm thấy sản phẩm.</p>;

  const box = {
    padding: "20px",
    background: "#fff",
    borderRadius: "10px",
    border: "1px solid #eee",
    maxWidth: "600px",
    margin: "20px auto",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  };

  const title = { fontSize: "22px", fontWeight: "600" };
  const price = { color: "#0f5132", fontWeight: 700 };

  return (
    <div style={box}>
      <h2 style={title}>{product.ten}</h2>

      <p><b>Danh mục:</b> {product.danhMuc}</p>

      <p>
        <b>Giá:</b>{" "}
        <span style={price}>{product.gia.toLocaleString("vi-VN")} ₫</span>
      </p>

      <p><b>Số lượng:</b> {product.soLuong}</p>
      <p><b>Mô tả:</b> {product.moTa}</p>
    </div>
  );
};

export default ProductDetail;
