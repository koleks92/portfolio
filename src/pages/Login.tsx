import { useState } from "react";
import { login } from "../auth/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const loginHandler = async (): Promise<void> => {
    const data = await login(email, password);

    setMessage("")

    if (data?.token) {
      navigate("/dashboard");
    } else {
      setMessage("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-text-primary">
      <h1 className="m-2">Admin Panel</h1>
      <div className="flex flex-col border-2 rounded-xl p-4 w-100">
        <span className="m-1">Email</span>
        <input
          className="m-1 bg-dark-light border-1 rounded-lg p-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="m-1">Password</span>
        <input
          className="m-1 bg-dark-light border-1 rounded-lg p-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex h-10 px-2 items-center">
          <span>{message}</span>
        </div>
        <button
          onClick={() => loginHandler()}
          className="flex items-center justify-center m-1 p-2 rounded-lg border-1 border-gray-300 bg-dark-light hover:bg-dark transition-colors"
        >
          Log in
        </button>
      </div>
    </div>
  );
}

export default Login;
