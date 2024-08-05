import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

const PromoPage = ({ promos }) => {
  const { id } = useParams();
  const promo = promos.find((p) => p.id === parseInt(id));

  if (!promo) {
    return <div>Promo kod topilmadi.</div>;
  }

  return (
    <div className="container mt-4">
      <Breadcrumb />
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{promo.title}</h2>
          <p className="card-text">{promo.description}</p>
          <p className="card-text">
            <strong>Kod:</strong> {promo.code}
          </p>
          <p className="card-text">
            <strong>Yaroqlilik muddati:</strong> {promo.expiryDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoPage;
