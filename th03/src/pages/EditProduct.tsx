import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";

const EditProduct = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Không tìm thấy sản phẩm để sửa.</p>;

  return (
    <div>
      <h1>Chỉnh sửa sản phẩm</h1>
      <ProductForm mode="edit" initialData={product} />
    </div>
  );
};

export default EditProduct;
