import AppRouter from "./router/AppRouter";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <AppRouter />
    </ProductProvider>
  );
}

export default App;
