import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import CategoryPage from "./CategoryPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import FloatingSocials from "./FloatingSocials";
import ReactGA from "react-ga4";
import SplashScreen from "./SplashScreen";

function ExternalRedirect({ url }) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);
  return null;
}

function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });
  }, [location]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <AnalyticsTracker />
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
