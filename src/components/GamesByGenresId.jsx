import React, { useEffect } from "react";

function GamesByGenresId({ gameList, selectedGenreName }) {
  useEffect(() => {
    console.log("genreList=", gameList);
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-bold dark:text-white mt-3">
        {selectedGenreName}
      </h2>
      <div className="grid grid-cols-1 mdg:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gameList.map((item) => (
          <div className="bg-[#76a8f75e] rounded-lg text-center group">
            <img
              src={item.background_image}
              className="w-full   h-[270px]  cursor-pointer object-cover  rounded-lg group-hover:scale-90 transition duration-300 "
            />
            <h2 className="dark:text-white font-bold group-hover:scale-90 transition duration-300 cursor-pointer mt-2">
              {item.name}
              <span>{item.metacritic}</span>
            </h2>
            <h2 className="dark:text-white">
              ⭐{item.rating}💬{item.reviews_count}🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenresId;
