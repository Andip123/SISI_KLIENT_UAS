import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputForm from "../components/Input";
import { useState } from "react";
import { register } from "../services/authService";

const FormRegister = () => {
  const [message, setMessage] = useState(""); // Menyimpan pesan sukses atau error

  // Fungsi register
  const handleRegister = (event) => {
    event.preventDefault();

    // Mengambil data dari form
    const data = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    // Memanggil fungsi register dari authService.js
    register(data, (status, res) => {
      if (status) {
        setMessage("Registration successful!"); // Tampilkan pesan sukses
      } else {
        setMessage(res); // Tampilkan pesan error
      }
    });
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="flex bg-[#0d1117] w-screen h-screen justify-center items-center">
        <div>
          <p className="text-white mb-2 text-3xl font-bold">Sign Up</p>
          <p className="text-white font-medium mb-5">
            Welcome, Please enter your details
          </p>
          <div className="flex flex-col bg-[#161b22] w-[288px] h-[375px] justify-center items-center rounded-[5px] border-[1px] border-gray-800">
            <InputForm label="Username" type="text" name="username" />
            <InputForm label="Email" type="email" name="email" />
            <InputForm label="Password" type="password" name="password" />
            <InputForm
              label="Confirm Password"
              type="password"
              name="confirmPassword"
            />
            <Button
              classname="w-[250px] h-[35px] bg-[#238636] rounded-md text-white items-center justify-center text-[14px]"
              type="submit"
            >
              Sign Up
            </Button>
          </div>
          {message && (
            <p className="text-center text-white mt-5">{message}</p>
          )}
          <div>
            <p className="text-sm mt-5 text-center text-white">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-blue-500">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormRegister;
