import React, { useState } from "react";
import { login } from "../services/user";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("send", data);
    login(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <div
          className="p-3 card shadow-lg p-3 mb-5 bg-body rounded"
          style={{ width: "20rem" }}
        >
          <h3>Welcome</h3>
          <div className="form-outline mb-4">
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              className="form-control"
            />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
            <br />
            {errors.email?.message && (
              <span className="text-danger">{errors.email?.message}</span>
            )}
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              {...register("password", { required: true })}
            />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <br />
            {errors.password?.type === "required" && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  onChange={() => {}}
                  id="form2Example31"
                  checked
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Login
          </button>

          <div className="text-center">
            <p>
              Not a member? <Link to={"signup"}>Register</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
