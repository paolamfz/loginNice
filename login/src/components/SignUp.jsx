import React from "react";
import { useForm } from "react-hook-form";
import { signup } from "../services/user";
import { useNavigate } from "react-router-dom";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  const onSubmit = (data) => {
    signup(data);
    navigate("/");
  };

  return (
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
        style={{ width: "30rem" }}
      >
        <h3>Sign Up</h3>
        <div className="form-group row my-3">
          <label for="staticEmail" className="col-sm-4 col-form-label">
            Name
          </label>
          <div className="col-sm-8">
            <input className="form-control" {...register("name")} />
          </div>
        </div>

        {/* include validation with required or other standard HTML validation rules */}

        <div className="form-group row my-3">
          <label for="staticEmail" className="col-sm-4 col-form-label">
            Lastname
          </label>
          <div className="col-sm-8">
            <input
              className="form-control"
              {...register("lastname", { required: true })}
            />
          </div>
        </div>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <div className="form-group row my-3">
          <label for="staticEmail" className="col-sm-4 col-form-label">
            Email
          </label>
          <div className="col-sm-8">
            <input className="form-control" {...register("email")} />
          </div>
        </div>
        <div className="form-group row my-3">
          <label for="staticEmail" className="col-sm-4 col-form-label">
            Password
          </label>
          <div className="col-sm-8">
            <input
              type={"password"}
              className="form-control"
              {...register("password")}
            />
          </div>
        </div>

        <input className="btn btn-primary" type="submit" />
      </div>
    </form>
  );
}
