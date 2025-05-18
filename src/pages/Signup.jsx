import React, { useState } from "react";

const Signup = ({ setView }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreed) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    // Reset error
    setError("");

    // Simulate signup
    console.log("Sign up:", { name, email, password });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-3xl font-semibold mb-6 text-center">Create Account</h2>

      {/* Display error if any */}
      {error && <p className="mb-4 text-red-400 text-sm text-center">{error}</p>}

      <form onSubmit={handleSignup}>
        <div className="mb-5">
          <label className="block text-sm mb-2">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm mb-2">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm mb-2">Confirm Password</label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-5 flex items-center gap-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="accent-green-500"
          />
          <label className="text-sm text-gray-300">
            I agree to the{" "}
            <span className="text-green-400 hover:underline cursor-pointer">
              Terms & Conditions
            </span>
          </label>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-gray-900 rounded font-semibold transition duration-200"
        >
          Sign Up
        </button>
      </form>

      {/* Login Link */}
      <p className="mt-6 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <button
          onClick={() => setView("login")}
          className="text-blue-400 hover:underline"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;
