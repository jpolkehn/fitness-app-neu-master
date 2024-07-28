import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProgramPage from "./pages/ProgramPage";
import ProgramDetailsPage from "./pages/ProgramDetailsPage";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/programs" element={<ProgramPage />} />
          <Route path="/programs/:id" element={<ProgramDetailsPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
