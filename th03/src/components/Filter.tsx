const Filter = ({
  category,
  setCategory,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}: any) => {
  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Tất cả danh mục</option>
        <option value="Điện tử">Điện tử</option>
        <option value="Quần áo">Quần áo</option>
        <option value="Đồ ăn">Đồ ăn</option>
        <option value="Sách">Sách</option>
        <option value="Khác">Khác</option>
      </select>

      <input
        placeholder="Giá tối thiểu"
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />

      <input
        placeholder="Giá tối đa"
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
