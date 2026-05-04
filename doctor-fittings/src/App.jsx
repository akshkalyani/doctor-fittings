import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import CategoryPage from "./CategoryPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import FloatingSocials from "./FloatingSocials";

function ExternalRedirect({ url }) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/category" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/address"
          element={
            <ExternalRedirect url="https://maps.app.goo.gl/TDe9t73EsMqpz8gw9" />
          }
        />
      </Routes>
      <FloatingSocials />
    </BrowserRouter>
  );
}

export default App;
