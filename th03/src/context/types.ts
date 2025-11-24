export interface Product {
  id: number;
  ten: string;
  danhMuc: string;
  gia: number;
  soLuong: number;
  moTa: string;
}

export type ProductAction =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "UPDATE_PRODUCT"; payload: Product }
  | { type: "DELETE_PRODUCT"; payload: number };
