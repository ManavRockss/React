import React, { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenresId from "../components/GamesByGenresId";

const Homepage = () => {
  const [allGamesList, setAllGamesList] = useState(0);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenreName, setSelectedGenreName] = useState("Action");
  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4);
  }, []);
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGamesList(resp.data.results);
    });
  };

  const getGameListByGenreId = (id) => {
    console.log("Genre Id", id);
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      setGameListByGenres(resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 px-3 py-4">
      <div className=" w-full hidden md:block">
        <GenreList
          genreId={(genreId) => getGameListByGenreId(genreId)}
          selectedGenreName={(name) => {
            setSelectedGenreName(name);
          }}
        />
      </div>
      <div className="col-span-4 md:col-span-3  w-full p-[25px]">
        {allGamesList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGamesList[0]} />
            <TrendingGames gameList={allGamesList} />
            <GamesByGenresId
              gameList={gameListByGenres}
              selectedGenreName={selectedGenreName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Homepage;
