import React from "react";
import { useGetPokemonList } from "../../hooks/useGetPokemonList";
import PokemonCard from "../../componentes/PokemonCard/PokemonCard";
import { Grid } from "../shared/Grid/Grid";

const PokemonList: React.FC = () => {
  const { pokemonList, gotToNextPage, gotPreviousPage } = useGetPokemonList();

  return (
    <Grid goToNextPage={gotToNextPage} goToPreviousPage={gotPreviousPage}>
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon?.name} pokemon={pokemon} />
      ))}
    </Grid>
  );
};

export default PokemonList;
