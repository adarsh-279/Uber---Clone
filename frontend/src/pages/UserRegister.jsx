import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullname: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-full pt-10 px-5 flex flex-col">
      <img
        className="h-8 w-[20%] mb-10"
        src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
        alt=""
      />
      <form
        onSubmit={submitHandler}
        className="w-full font-[Uber-Medium]"
      >
        <h1 className="text-2xl mb-3">What's your Name</h1>
        <div className="w-full flex flex-row items-center justify-between">
          <input
            required
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="first name"
            className="hover:border rounded-xl px-5 py-3 w-[48%] text-lg bg-[#eeeeee] mb-3"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="last name"
            className="hover:border rounded-xl px-5 py-3 w-[48%] text-lg bg-[#eeeeee] mb-3"
          />
        </div>
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
          Sign Up
        </button>
      </form>
      <h3 className="text-center mt-3">
        Already have an account ?{" "}
        <Link to="/user/login" className="text-blue-600">
          Login Here
        </Link>
      </h3>
      <h3 className="mt-10 opacity-50">
        By continuing, you agree to emails or texts from Uber and its
        affiliates.
      </h3>
    </div>
  );
};

export default UserRegister;
