import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

function HomePage() {
  return (
    <div className="bg-fitness-color-dark flex flex-col items-center  min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-white mt-20">
        Willkommen zur Fitness-App
      </h1>
      <Header />
      <div className="mt-10 animate-bounce text-2xl mb-6">Get Fit</div>
      <Link className="mt-10" to="/register">
        <button className="bg-fitness-color-yellow text-black px-4 py-2 rounded mb-2">
          Registrieren
        </button>
      </Link>
      <Link to="/login" className="text-blue-500 mb-20">
        oder anmelden
      </Link>
      <Navigation />
    </div>
  );
}

export default HomePage;
