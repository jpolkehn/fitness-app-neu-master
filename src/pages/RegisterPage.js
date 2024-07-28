import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Hier kann die Registrierung durchgeführt werden, z.B. durch eine API-Anfrage
    console.log("Registrierung:", { username, email, password });
    // Nach erfolgreicher Registrierung weiterleiten
    navigate("/programs");
  };

  return (
    <div className="bg-fitness-color-dark flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">Registrieren</h1>
      <form
        onSubmit={handleRegister}
        className="bg-fitness-color-yellow p-6 rounded shadow-md"
      >
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Benutzername
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
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
          Registrieren
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
