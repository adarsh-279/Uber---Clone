import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const {captain, setCaptain} = useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)

    if (response.status === 200) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-full pt-5 px-5 flex flex-col font-[Uber-Medium]">
      <img
        className="h-28 w-[30%]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwKKtljUlhsADs-8uWgaQ5i0_D_3kh594nnvkG5FCJsY4gERJYXPk9JT8u30R4kdV4Kg&usqp=CAU"
        alt=""
      />
      <form
        onSubmit={submitHandler}
        className="w-full"
      >
        <h1 className="text-2xl mb-3">Enter your email</h1>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="example@email.com"
          className="hover:border rounded-xl px-5 py-3 w-full text-lg bg-[#eeeeee] mb-3"
        />
        <h1 className="text-2xl mb-3">Enter your password</h1>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          className="hover:border rounded-xl px-5 py-3 w-full text-lg bg-[#eeeeee]"
        />
        <button className="flex items-center justify-center py-5 w-full bg-black text-white text-xl rounded-xl mt-6">
          Login
        </button>
      </form>
      <h3 className="text-center mt-3">
        New here?{" "}
        <Link to="/captain/register" className="text-blue-600">
          Create new Account
        </Link>
      </h3>
      <h3 className="mt-10 opacity-50">
        By continuing, you agree to emails or texts from Uber and its
        affiliates.
      </h3>
      <Link
        to="/user/login"
        className="flex items-center justify-center py-5 w-full bg-[#001554] text-white text-xl rounded-xl mt-65"
      >
        Log In as a User
      </Link>
    </div>
  );
};

export default CaptainLogin;
