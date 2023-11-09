import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ICharacter } from "../../core/models";
import { getCharacter } from "../../core/api";

const Character = () => {
  const navigate = useNavigate();
  const { id = "0" } = useParams();

  const [character, setCharacter] = useState<ICharacter | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCharacter(id)
      .then((res) => setCharacter(res))
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full gap-4 p-4 bg-gray-800 border-2 border-gray-600 rounded-lg">
      {isLoading ? (
        <span className="p-1 text-3xl font-bold text-center text-yellow-400">
          ...loading
        </span>
      ) : (
        <>
          <img
            loading="lazy"
            src={character?.image}
            alt={character?.name}
            className="align-middle border-8 rounded-full w-96 border-slate-500"
          />
          <h1 className="p-1 text-3xl font-bold text-yellow-400">
            {character?.name}
          </h1>
          <ul className="text-lg font-bold text-center text-gray-400">
            <li>
              Gender:{" "}
              <span className="font-light text-gray-400">
                {character?.gender}
              </span>
            </li>
            <li>
              Specie:{" "}
              <span className="font-light text-gray-400">
                {character?.species}
              </span>
            </li>
            <li>
              Origin:{" "}
              <span className="font-light text-gray-400">
                {character?.origin.name}
              </span>
            </li>
            <li>
              Location:{" "}
              <span className="font-light text-gray-400">
                {character?.location.name}
              </span>
            </li>
            {character?.type && (
              <li>
                Type:{" "}
                <span className="font-light text-gray-400">
                  {character?.type}
                </span>
              </li>
            )}
          </ul>
          <button
            className="p-2 text-lg text-yellow-400"
            onClick={() => navigate(-1)}
          >
            Go back!
          </button>
        </>
      )}
    </div>
  );
};

export default Character;
