import FromLogin from "../Fragments/FormLogin";
import { login } from "../services/authService";
import { useState } from "react";

const LoginPage = () => {
  const [message, setMessage] = useState ("");

  const handleLogin = (FormData) => {
    login (FormData, (success, result) => {
      if (success) {
        setMessage("Login success!!");
        localStorage.setItem("Token", result);
      }else {
        setMessage(result);
      }
    });
  };

  return (
    <div>
      <FromLogin onLogin={handleLogin}/>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginPage