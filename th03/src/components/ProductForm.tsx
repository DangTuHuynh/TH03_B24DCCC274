import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Product } from "../context/types";
import { useNavigate } from "react-router-dom";

interface Props {
  mode: "add" | "edit";
  initialData?: Product;
}

const categories = ["Điện tử", "Quần áo", "Đồ ăn", "Sách", "Khác"];

const ProductForm = ({ mode, initialData }: Props) => {
  const { dispatch } = useContext(ProductContext);
  const nav = useNavigate();

  const [form, setForm] = useState<Product>(
    initialData || {
      id: Date.now(),
      ten: "",
      danhMuc: "",
      gia: 0,
      soLuong: 0,
      moTa: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    if (mode === "add") {
      dispatch({ type: "ADD_PRODUCT", payload: form });
    } else {
      dispatch({ type: "UPDATE_PRODUCT", payload: form });
    }
    nav("/");
  };

  return (
    <div>
      <input name="ten" placeholder="Tên" value={form.ten} onChange={handleChange} />

      <select name="danhMuc" value={form.danhMuc} onChange={handleChange}>
        <option value="">-- Chọn danh mục --</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <input name="gia" type="number" value={form.gia} onChange={handleChange} />
      <input name="soLuong" type="number" value={form.soLuong} onChange={handleChange} />
      <textarea name="moTa" value={form.moTa} onChange={handleChange} />

      <button onClick={submit}>{mode === "add" ? "Thêm" : "Cập nhật"}</button>
    </div>
  );
};

export default ProductForm;
