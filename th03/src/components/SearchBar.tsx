const SearchBar = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => {
  return <input placeholder="Tìm kiếm..." value={value} onChange={(e) => onChange(e.target.value)} />;
};

export default SearchBar;
