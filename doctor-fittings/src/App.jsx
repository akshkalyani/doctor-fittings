import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import FloatingSocials from "./FloatingSocials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FloatingSocials />
    </BrowserRouter>
  );
}

export default App;