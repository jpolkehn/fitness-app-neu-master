import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      id
      name
    }
  }
`;

function ProgramPage() {
  const { loading, error, data } = useQuery(GET_PROGRAMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

 
  const gradients = [
    "from-fitness-color-yellow to-fitness-color-light-pink",
    "from-fitness-color-turkis to-fitness-color-light-green",
    "from-fitness-color-dark-blue to-fitness-color-mint",
  ];

  return (
    <div className="min-h-screen bg-fitness-color-dark p-4 ">
      <h1 className="text-2xl font-bold mb-4 text-white text-center">Programme</h1>
      <ul className="mb-20 space-y-4 text-center ">
        {data.programs.map((program, index) => (
          <li key={program.id}>
            <Link to={`/programs/${program.id}`}>
              <div
                className={` max-w-96 mx-auto p-4 rounded-lg shadow-md bg-gradient-to-br ${
                  gradients[index % gradients.length]
                } hover:shadow-lg transition-shadow duration-300`}
              >
                <p className="text-lg font-semibold text-gray-800">
                  {program.name}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Navigation />
    </div>
  );
}

export default ProgramPage;
