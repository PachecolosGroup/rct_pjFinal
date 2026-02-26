import { BASE_URL } from "../constants/url";
import { PokemonListItem } from "../interfaces/PokemonListItem";
import useGetPokemon from "./useGetPokemon";
import { useQuery } from "@tanstack/react-query";

interface Pokemon {
  pokemon: PokemonListItem;
}

interface TypeListInfo {
  pokemon: Pokemon[];
}

const useGetPokemonListType = (typeName: string) => {
  const { data, isLoading, error } = useQuery<TypeListInfo>({
    queryKey: ["pokemonListByType", typeName],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/type/${typeName}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return {
    pokemonList: data?.pokemon ?? [],
    isLoading,
    error: error?.message ?? null,
  };
};

export default useGetPokemonListType;
