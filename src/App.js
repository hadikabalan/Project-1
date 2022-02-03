import "./App.css";
import Header from "./Components/Header";
import Promo from "./Components/Promo";
import Newproducts from "./Components/Newproducts";
import ProductList from "./Components/ProductList";
import Partners from "./Components/Partners";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Newproducts />
      <ProductList />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
