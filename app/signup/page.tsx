"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Registration successful");
        router.push("/api/auth/signin");
      } else {
        const errorMessage = await response.json();
        setError(errorMessage);
      }
    } catch (error) {
      console.error("Error sending registration request", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-main-color via-orange-bb to-main-color">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-main-color">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-b-2 focus:ring-2 focus:ring-orange-bb p-2"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-main-color">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border-b-2 focus:ring-2 focus:ring-orange-bb p-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-black text-white p-2 rounded-full w-full hover:bg-opacity-90">
            Sign Up
          </button>
        </form>
        {error && <p className="text-center text-red-500 text-sm mt-2">Invalid credentials</p>}
      </div>
    </div>
  );
};

export default SignUp;
