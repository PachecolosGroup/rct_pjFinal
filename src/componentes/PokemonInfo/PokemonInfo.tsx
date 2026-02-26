import React, { useMemo } from "react";
import useGetPokemon from "../../hooks/useGetPokemon";
import { useParams } from "react-router-dom";
import { getMainPokemonType } from "../../util/getMainPokemonType";
import { capitalizeFirstLetter } from "../../util/capitalizeFristLetter";
import { convertInchToCm } from "../../util/convertInchToCm";
import { convertLbsToKg } from "../../util/convertLBSToKg";
import { PokemonSprites } from "../PokemonSprites/PokemonSprites";
import { TypeIcons } from "../shared/TypeIcon/TypeIcons";

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
        <div className="relative flex">
          <h1 className="text-3xl">
            {capitalizeFirstLetter(pokemonData?.name ?? "Loading...")}
            <TypeIcons types={pokemonData?.types ?? []} />
          </h1>
        </div>

        <span>{`Weight: ${convertLbsToKg(pokemonData?.weight ?? 0)} kg`}</span>
        <span>{`Height: ${convertInchToCm(pokemonData?.height ?? 0)} cm`}</span>
        <PokemonSprites pokemonName={pokemonName} />
      </div>
    </div>
  );
};
