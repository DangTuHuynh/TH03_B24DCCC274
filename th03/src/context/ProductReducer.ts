import { Product, ProductAction } from "./types";

export const ProductReducer = (state: Product[], action: ProductAction) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];

    case "UPDATE_PRODUCT":
      return state.map((p) => (p.id === action.payload.id ? action.payload : p));

    case "DELETE_PRODUCT":
      return state.filter((p) => p.id !== action.payload);

    default:
      return state;
  }
};
