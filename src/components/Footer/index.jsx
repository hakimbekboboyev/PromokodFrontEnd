import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Sayt haqida ma'lumot</h5>
            <p>
              Bu sayt promokodlar va chegirmalar uchun platforma. Bizning
              maqsadimiz sizga eng so'nggi chegirmalar haqida ma'lumot berish va
              sifatli ishlab chiqilgan kodlardan foydalanish imkoniyatini
              ta'minlashdir.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Ijtimoiy tarmoqlar</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/facebook">Facebook</Link>
              </li>
              <li>
                <Link to="/twitter">Twitter</Link>
              </li>
              <li>
                <Link to="/instagram">Instagram</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Qo'llab-quvvatlash</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Bog'lanish</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-center">
              © 2024 Bizning Sayt. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
