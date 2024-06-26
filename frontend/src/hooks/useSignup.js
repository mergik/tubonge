import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    email,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      email,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          email,
          password,
          confirmPassword,
          gender,
        }),
      });

      if (!response.ok) {
        // Check for non-200 status codes
        const errorData = await response.json();
        // Handle potential missing error message
        const errorMessage =
          errorData?.message || "An error occurred during signup.";
        toast.error(errorMessage);
        return;
      }

      const data = await response.json();
      if (data.error) {
        // Check for error messages in successful responses
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error(
        "We encountered an issue while trying to sign you up, please try again later"
      );
      // toast.error(error.message) verbose for dev only
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  email,
  password,
  confirmPassword,
  gender,
}) {
  if (
    !fullName ||
    !username ||
    !email ||
    !password ||
    !confirmPassword ||
    !gender
  ) {
    toast.error("Please fill in all the fields!");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Passwords must be atleast 6 characters!");
    return false;
  }

  return true;
}
