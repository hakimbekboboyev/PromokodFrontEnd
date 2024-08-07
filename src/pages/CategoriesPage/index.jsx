import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import axios from "axios";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://3.129.216.238:9090/api/v1/promo/getAllCategory")
      .then(({ data }) => setCategories(data));
  }, []);

  console.log(categories);
  
  return (
    <div className="container mt-4">
      <Breadcrumb />
      <h2 className="mb-4">Kategoriyalar</h2>
      <div className="row">
        {categories.map((category) => (
          <div key={category.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <Link
                  to={`/categories/${category.id}`}
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

export default CategoriesPage;
