import { PokemonTypes } from "../constants/types";
import { PokemonType } from "../interfaces/PokemonData";

import normal from "../../src/iconPokemon/normal.svg";
import bug from "../../src/iconPokemon/bug.svg";
import dark from "../../src/iconPokemon/dark.svg";
import dragon from "../../src/iconPokemon/dragon.svg";
import electric from "../../src/iconPokemon/electric.svg";
import fairy from "../../src/iconPokemon/fairy.svg";
import fighting from "../../src/iconPokemon//fighting.svg";
import fire from "../../src/iconPokemon/fire.svg";
import flying from "../../src/iconPokemon/flying.svg";
import ghost from "../../src/iconPokemon/ghost.svg";
import grass from "../../src/iconPokemon/grass.svg";
import ground from "../../src/iconPokemon//ground.svg";
import ice from "../../src/iconPokemon/ice.svg";
import poison from "../../src/iconPokemon/poison.svg";
import psychic from "../../src/iconPokemon/psychic.svg";
import rock from "../../src/iconPokemon/rock.svg";
import steel from "../../src/iconPokemon/steel.svg";
import water from "../../src/iconPokemon/water.svg";

export const mapTypeToIcon = (type: PokemonType) => {
  switch (type.type.name) {
    case PokemonTypes.normal:
      return normal;
    case PokemonTypes.bug:
      return bug;
    case PokemonTypes.dark:
      return dark;
    case PokemonTypes.dragon:
      return dragon;
    case PokemonTypes.electric:
      return electric;
    case PokemonTypes.fairy:
      return fairy;
    case PokemonTypes.fighting:
      return fighting;
    case PokemonTypes.fire:
      return fire;
    case PokemonTypes.flying:
      return flying;
    case PokemonTypes.ghost:
      return ghost;
    case PokemonTypes.grass:
      return grass;
    case PokemonTypes.ground:
      return ground;
    case PokemonTypes.ice:
      return ice;
    case PokemonTypes.poison:
      return poison;
    case PokemonTypes.psychic:
      return psychic;
    case PokemonTypes.rock:
      return rock;
    case PokemonTypes.steel:
      return steel;
    case PokemonTypes.water:
      return water;
    default:
      return normal;
  }
};
