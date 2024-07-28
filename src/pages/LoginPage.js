import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Hier kann die Anmeldung durchgeführt werden, z.B. durch eine API-Anfrage
    console.log("Anmeldung:", { email, password });
    // Nach erfolgreicher Anmeldung weiterleiten
    navigate("/programs");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-fitness-color-dark">
      <h1 className="text-2xl font-bold mb-4 text-white">Anmelden</h1>
      <form onSubmit={handleLogin} className="bg-fitness-color-yellow p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            E-Mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Passwort
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Anmelden
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
