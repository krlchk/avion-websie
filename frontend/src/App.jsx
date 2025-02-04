import { AboutPage } from "./pages/AboutPage";
import { AllProductsPage } from "./pages/AllProductsPage";
import { Homepage } from "./pages/Homepage";
import { ProductListingPage } from "./pages/ProductListingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, SignUp } from "./pages/Reg";
import { BasketPage } from "./pages/BasketPage/basket-page";
import { CartProvider } from "./pages/BasketPage/BasketPageComponents";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/products/:id" element={<ProductListingPage />}></Route>
          <Route path="/aboutus" element={<AboutPage />}></Route>
          <Route path="/allproducts" element={<AllProductsPage />}></Route>
          <Route path="/basket-page" element={<BasketPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
