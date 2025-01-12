import FormRegister from "../Fragments/FormRegister";
import { register } from "../services/authService";
import { useState } from "react";

const RegisterPage = () => {
  const [message, setMessage] = useState(""); // Menampilkan pesan sukses atau error

  const handleRegister = (formData) => {
    register(formData, (success, result) => {
      if (success) {
        setMessage("Registration successful!");
      } else {
        setMessage(result); // Menampilkan pesan error
      }
    });
  };

  return (
    <div>
      <FormRegister onRegister={handleRegister} />
      {message && <p>{message}</p>} {/* Pesan sukses atau error */}
    </div>
  );
};

export default RegisterPage;
