import React, { useState, useEffect } from "react";
import PromoCard from "../../components/PromoCard";
import Breadcrumb from "../../components/Breadcrumb";

const HomePage = () => {
  return (
    <div className="container mt-4">
      <Breadcrumb />
      <PromoCard type='all' />
    </div>
  );
};

export default HomePage;
