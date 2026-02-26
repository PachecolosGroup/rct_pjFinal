import React from "react";
import { Route, Routes } from "react-router-dom";

const Pokedex = React.lazy(() => import("../views/Pokedex"));
const PokemonProfile = React.lazy(() => import("../views/PokemonProfile"));
const PokemonByType = React.lazy(() => import("../views/PokemonTypes"));

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <React.Suspense fallback={<div>Loading the Pokedex...</div>}>
          <Pokedex />
        </React.Suspense>
      }
    />
    <Route
      path="/pokemon/:pokemonName"
      element={
        <React.Suspense fallback={<div>Loading the Pokemon Profile...</div>}>
          <PokemonProfile />
        </React.Suspense>
      }
    />
    <Route
      path="/type/:typeName"
      element={
        <React.Suspense
          fallback={<div>Loading the Pokemon List by Type...</div>}
        >
          <PokemonByType />
        </React.Suspense>
      }
    />
  </Routes>
);

export default AppRoutes;
