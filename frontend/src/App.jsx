import { AboutPage } from "./pages/AboutPage";
import { AllProductsPage } from "./pages/AllProductsPage";
import { Homepage } from "./pages/Homepage";
import { ProductListingPage } from "./pages/ProductListingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/products/:id" element={<ProductListingPage />}></Route>
          <Route path="/aboutus" element={<AboutPage />}></Route>
          <Route path="/allproducts" element={<AllProductsPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
