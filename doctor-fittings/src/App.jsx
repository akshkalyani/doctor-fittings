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
            <ExternalRedirect url="https://www.google.com/maps/place/Doctor+Fittings+%26+Hardware/@22.2382851,70.80016,17z/data=!3m1!4b1!4m6!3m5!1s0x3959cb94e59cf4a7:0x2042dbca35b450dd!8m2!3d22.2382851!4d70.8027349!16s%2Fg%2F11k6963kw7?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" />
          }
        />
      </Routes>
      <FloatingSocials />
    </BrowserRouter>
  );
}

export default App;
