import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "../recoil/authState";
import { useState } from "react";
import { signinUser, signupUser } from "../api/authApi";
import { signinSchema } from "../utils/ZodSchemas";

export const useSignIn = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const [errors, setErrors] = useState({});

  const signIn = async (formData) => {
    try {
      // Validate form data with Zod
      signinSchema.parse(formData);

      // Clear previous errors
      setErrors({});

      // Call the signup API
      const data = await signinUser(formData);
      console.log("data", data);


    console.log("currTokenRecoil", auth.token)
    console.log("currAuthStatusRecoil", auth.isAuthenticated)

    

      // Store token in local storage for persistent authentication
      localStorage.setItem("authToken", data);

      const token = localStorage.getItem("authToken");
      if (token) {
        console.log("data in recoil", data);
        // Update the Recoil state with token and authentication status
        setAuth({
          token: data,
          isAuthenticated: true,
        });
      }

      return true; // Signin successful
    } catch (error) {
      if (error.errors) {
        // Zod validation errors
        const validationErrors = error.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message;
          return acc;
        }, {});
        setErrors(validationErrors);
      } else {
        // API error
        setErrors({ apiError: error.message });
      }
      return false; // Signin failed
    }
  };

  return { signIn, errors };
};
