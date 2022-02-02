import "./App.css";
import Header from "./Components/Header";
import Promo from "./Components/Promo";
import Newproducts from "./Components/Newproducts";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Newproducts />
      <ProductList />
    </div>
  );
}

export default App;
