import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";

const CompanyPage = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchedCompanies = [
      { id: 1, name: "Amazon", description: "Onlayn savdo platformasi" },
      { id: 2, name: "Nike", description: "Sport kiyimlari" },
      {
        id: 3,
        name: "McDonald's",
        description: "Fast-food restoranlar tarmog'i",
      },
    ];
    setCompanies(fetchedCompanies);
  }, []);

  return (
    <div className="container mt-4">
      <Breadcrumb />
      <h2 className="mb-4">Kompaniyalar</h2>
      <div className="row">
        {companies.map((company) => (
          <div key={company.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{company.name}</h5>
                <p className="card-text">{company.description}</p>
                <Link
                  to={`/companies/${company.id}`}
                  className="btn btn-primary"
                >
                  Ko'rish
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyPage;
