import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Không tìm thấy sản phẩm.</p>;

  return (
    <div>
      <h2>{product.ten}</h2>
      <p><b>Danh mục:</b> {product.danhMuc}</p>
      <p><b>Giá:</b> {product.gia}</p>
      <p><b>Số lượng:</b> {product.soLuong}</p>
      <p><b>Mô tả:</b> {product.moTa}</p>
    </div>
  );
};

export default ProductDetail;
