import React from "react";
import { Route, Routes } from "react-router-dom";

const Pokedex = React.lazy(() => import("../views/Pokedex"));
const PokemonProfile = React.lazy(() => import("../views/PokemonProfile"));

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
  </Routes>
);

export default AppRoutes;
