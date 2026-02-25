import React, { useMemo } from "react";
import useGetPokemon from "../../hooks/useGetPokemon";
import { useParams } from "react-router-dom";
import { getMainPokemonType } from "../../util/getMainPokemonType";
import { capitalizeFirstLetter } from "../../util/capitalizeFristLetter";
import { convertInchToCm } from "../../util/convertInchToCm";
import { convertLbsToKg } from "../../util/convertLBSToKg";
import { PokemonSprites } from "../PokemonSprites/PokemonSprites";

export const PokemonInfo = () => {
  const { pokemonName } = useParams();
  const { pokemonData } = useGetPokemon(pokemonName ?? "", undefined);
  const mainType = useMemo(
    () => pokemonData && getMainPokemonType(pokemonData),
    [pokemonData]
  );

  return (
    <div className="flex flex-row justify-between shadow-lg bg-gray-100 rounded-lg">
      <div
        className={`${mainType}-background w-72 h-72 rounded-l-lg items-center`}
      >
        <img
          className="mx-auto w-72 h-72"
          src={pokemonData?.sprites.front_default}
          alt={pokemonData?.name ?? ""}
        />
      </div>
      <div className="flex flex-col grow p-5 gap-3">
        <h1 className="text-3xl font-bold">
          {capitalizeFirstLetter(pokemonData?.name ?? "Loading...")}
        </h1>
        <span>{`Weight: ${convertLbsToKg(pokemonData?.weight ?? 0)} kg`}</span>
        <span>{`Height: ${convertInchToCm(pokemonData?.height ?? 0)} cm`}</span>
        <PokemonSprites pokemonName={pokemonName} />
      </div>
    </div>
  );
};
