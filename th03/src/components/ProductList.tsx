import ProductCard from "./ProductCard";
import { Product } from "../context/types";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
