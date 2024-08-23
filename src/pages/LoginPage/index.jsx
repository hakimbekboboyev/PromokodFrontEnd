import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Breadcrumb from "../../components/Breadcrumb";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => axios
      .post("https://promokodapi-production.up.railway.app/api/v1/auth/authenticate", data)
      .then(({ data }) => console.log(data));

  return (
    <div className="container mt-4">
      <Breadcrumb />
      <h2 className="mb-4">Kirish</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email:</label>
          <input
            {...register("email")}
            className="form-control"
            type="email"
            required
          />
        </div>
        <div className="form-group">
          <label>Parol:</label>
          <input
            {...register("password")}
            type="password"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Kirish
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
