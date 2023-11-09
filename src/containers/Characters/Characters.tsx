import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCharacters } from "../../core/api";
import { ICharacters } from "../../core/models";
import CardCharacter from "../../components/CardCharacter";
import Pagination from "../../components/Pagination";

const getParamsFromUrl = (url: string, param: string) => {
  return url.split(param)[1] ?? "";
};

const Characters = () => {
  const { page = "1" } = useParams();
  const [characters, setCharacters] = useState<ICharacters | null>();
  const [isLoading, setIsLoading] = useState(false);

  const prevPage = getParamsFromUrl(characters?.info.prev ?? "", "?page=");
  const nextPage = getParamsFromUrl(characters?.info.next ?? "", "?page=");

  useEffect(() => {
    if (isNaN(Number(page))) {
      throw new Error("Page not found");
    }

    setIsLoading(true);
    getCharacters(page)
      .then((res) => setCharacters(res))
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => setIsLoading(false));
  }, [page]);

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-cyan-50">
        Characters
      </h1>
      <div className="flex flex-col justify-center flex-1 gap-4">
        {isLoading ? (
          <span className="self-center p-1 text-3xl font-bold text-center text-yellow-400">
            ...loading
          </span>
        ) : (
          <>
            <Pagination page={page} prevPage={prevPage} nextPage={nextPage} />
            <div className="flex flex-wrap justify-center gap-4">
              {characters?.results.map((character) => (
                <CardCharacter key={character.id} character={character} />
              ))}
            </div>
            <Pagination page={page} prevPage={prevPage} nextPage={nextPage} />
          </>
        )}
      </div>
    </>
  );
};

export default Characters;
