import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(isLoading);
};

const LoginPage = () => {
  return (
    <>
      <Link to="/turistei-paraty">
        <FaHome className="fixed top-5 right-5 text-2xl text-lime-900 hover:scale-110" />
      </Link>
      <div className="bg-lime-200 h-lvh flex flex-col justify-center items-center gap-2">
        <h1 className="font-bold text-2xl text-lime-900">Login | Cadastro</h1>
        <div className="bg-yellow-200 rounded-2xl w-md p-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col border-2 rounded-lg border-lime-900/60 p-4"
          >
            <fieldset className="border-1 rounded-md flex items-center justify-center">
              <legend className="ml-2">E-mail</legend>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full text-center focus:outline-none pb-2"
              />
            </fieldset>

            <fieldset className="border-1 rounded-md flex items-center justify-center">
              <legend className="ml-2">Senha</legend>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full text-center focus:outline-none pb-2"
              />
            </fieldset>
            <button
              type="submit"
              className="bg-lime-900
          mt-4 p-2 rounded-md text-yellow-200 font-bold hover:bg-lime-400 hover:text-lime-950 transition-colors"
            >
              Login / Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
