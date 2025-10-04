import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthContext } from '../../../context/AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { showSuccessToast } from '../../../components/Toast/showSuccessToast';
import { showFailedToast } from '../../../components/Toast/showFailedToast';
const LoginArea = () => {
   const { handleLogin } = useAuthContext();
   const navigate = useNavigate();
   const { register, handleSubmit, reset } = useForm();
   const onSubmit = async data => {
      const username = data.username;
      const password = data.password;

      const status = await handleLogin(username, password)
      reset()
      if (status === 201) {
         showSuccessToast("Berhasil login!")
      } else {
         showFailedToast("Gagal login!")
      }
   };
   return (
      <>
<section className="my-20">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div className="basic-login">
          <h3 className="text-center mb-5">Login</h3>

          <div className="mb-4">
            <h6 className="text-warning">
              Login menggunakan username dan password dibawah untuk melihat demo halaman-halaman setiap user.
            </h6>
            <ul className="list-unstyled mb-0">
              <li>
                <strong>Pelanggan</strong> → username: <code>budi</code>, password: <code>123456</code>
              </li>
              <li>
                <strong>Admin</strong> → username: <code>admin</code>, password: <code>123456</code>
              </li>
              <li>
                <strong>Kasir</strong> → username: <code>kasir</code>, password: <code>123456</code>
              </li>
              <li>
                <strong>Owner</strong> → username: <code>owner</code>, password: <code>123456</code>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username <span className="text-danger">*</span>
              </label>
              <input
                {...register("username")}
                required
                id="username"
                type="text"
                className="form-control"
                placeholder="Masukkan Username"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password <span className="text-danger">*</span>
              </label>
              <input
                {...register("password")}
                required
                id="password"
                type="password"
                className="form-control"
                placeholder="Masukkan Password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">
              Sign In
            </button>
               <button
               type="button"
               // onClick={handleGoogleLogin}
               className="w-100 mb-3 btn-google d-flex align-items-center justify-content-center"
               >
               <svg
                  className="google-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 262"
               >
                  <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/>
                  <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/>
                  <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"/>
                  <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/>
               </svg>
               Login dengan Google
               </button>
            <div className="d-flex align-items-center justify-content-end">
              <p className="mb-0 me-1">Don't have an account?</p>
              <p className="mb-0">
                <Link className="text-primary" to="/register">
                  Click here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
   );
};

export default LoginArea;