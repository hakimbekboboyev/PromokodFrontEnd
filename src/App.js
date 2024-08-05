import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage/index.jsx";
import CategoriesPage from "./pages/CategoriesPage";
import CompanyPage from "./pages/CompanyPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer/index.jsx";
import PromoPage from "./pages/PromoPage/index.jsx";
import CategoriesPromoPage from "./pages/CategoriesPromoPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/*" element={<CategoriesPromoPage />} />
          <Route path="/companies" element={<CompanyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/promos/:id" element={<PromoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
