import React from "react";
import { useNavigate } from "react-router";
import { PokemonType } from "../../../interfaces/PokemonData";
import { mapTypeToIcon } from "../../../util/mapTypeToIcon";

interface TypeIconsProps {
  types: PokemonType[];
}

export const TypeIcons: React.FC<TypeIconsProps> = ({ types }) => {
  const navigate = useNavigate();

  const onClick = (type: PokemonType) => {
    navigate(`/type/${type.type.name}`);
  };

  return (
    <div className="absolute top-2 right-2 gap-2 cursor-pointer">
      {types.map((type) => (
        <div
          className="bg-white p-1 rounded-full w-6 h-6 mb-1"
          key={type.type.name}
          onClick={() => onClick(type)}
        >
          <img
            src={mapTypeToIcon(type)}
            alt={`${type.type.name} icon`}
            className="w-6 h-6"
          />
        </div>
      ))}
    </div>
  );
};
