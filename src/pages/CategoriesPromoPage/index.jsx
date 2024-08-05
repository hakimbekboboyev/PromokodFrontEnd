import React, { useState, useEffect } from "react";
import PromoCard from "../../components/PromoCard";
import Breadcrumb from "../../components/Breadcrumb";

const CategoriesPromoPage = () => {
  return (
    <div className="container mt-4">
      <Breadcrumb />
      <PromoCard />
    </div>
  );
};

export default CategoriesPromoPage;
