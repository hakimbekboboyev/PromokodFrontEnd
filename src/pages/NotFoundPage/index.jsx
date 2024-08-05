import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container mt-4 text-center">
      <h1 className="display-1">404</h1>
      <h2 className="mb-4">Sahifa topilmadi</h2>
      <p className="lead">
        Kechirasiz, siz qidirgan sahifa mavjud emas. Iltimos, bosh sahifaga
        qayting.
      </p>
      <Link className="btn btn-primary" to="/">
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};

export default NotFoundPage;
