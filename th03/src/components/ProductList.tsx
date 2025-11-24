import ProductCard from "./ProductCard";
import { Product } from "../context/types";

const ProductList = ({ products }: { products: Product[] }) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
  };

  return (
    <div style={gridStyle}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
