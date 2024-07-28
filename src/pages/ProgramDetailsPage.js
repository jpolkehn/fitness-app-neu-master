import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";

const GET_PROGRAM_DETAILS = gql`
  query GetProgram($id: ID!) {
    program(where: { id: $id }) {
      name
      description
      focus
      duration
      workoutsWithDay {
        day
        workout {
          name
        }
      }
    }
  }
`;

function ProgramDetailsPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROGRAM_DETAILS, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { name, description, focus, duration, workoutsWithDay } = data.program;

  return (
    <div className="min-h-screen bg-fitness-color-dark p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">{name}</h1>
      <p className="text-white">{description}</p>
      <p className="text-white">Focus: {focus}</p>
      <p className="text-white">Duration: {duration}</p>
      <h2 className="text-xl mt-4 mb-2 text-white">Workouts:</h2>
      <ul className="text-white">
        {workoutsWithDay.map((workoutDay) => (
          <li
            key={workoutDay.day}
          >{`Day ${workoutDay.day}: ${workoutDay.workout.name}`}</li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Programm starten
      </button>
      <Navigation />
    </div>
  );
}

export default ProgramDetailsPage;
