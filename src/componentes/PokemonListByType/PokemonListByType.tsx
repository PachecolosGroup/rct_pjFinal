import React from "react";
import { useParams } from "react-router";
import useGetPokemonListType from "../../hooks/useGetPokemonListType";
import { Grid } from "../shared/Grid/Grid";
import PokemonCard from "../PokemonCard/PokemonCard";

export const PokemonTypeList = () => {
  const { typeName } = useParams();
  const { pokemonList } = useGetPokemonListType(typeName || "");

  return (
    <Grid>
      {pokemonList?.map((pokemon) => (
        <PokemonCard key={pokemon?.pokemon.name} pokemon={pokemon?.pokemon} />
      ))}
    </Grid>
  );
};
