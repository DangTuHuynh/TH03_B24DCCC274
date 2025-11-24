import React, { createContext, useReducer } from "react";
import { Product } from "./types";
import { ProductReducer } from "./ProductReducer";
import { initialProducts } from "../data/initialProducts";

interface ProductContextType {
  products: Product[];
  dispatch: React.Dispatch<any>;
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  dispatch: () => {},
});

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, dispatch] = useReducer(ProductReducer, initialProducts);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
