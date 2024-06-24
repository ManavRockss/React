import React, { useEffect } from "react";

function TrendingGames({ gameList }) {
  useEffect(() => {
    console.log(gameList);
  }, []);
  return (
    <div className="hidden md:block">
      <h2 className="text-3xl font-bold dark:text-white mt-2">Trending List</h2>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 mt-4 gap-3 ">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div className="bg-[#76a8f75e] rounded-lg text-center group">
                <img
                  src={item.background_image}
                  className=" h-[270px] w-[300px] object-cover  rounded-lg group-hover:scale-90 transition duration-300 cursor-pointer"
                />
                <h2 className="dark:text-white text-[17px] font-bold group-hover:scale-90 transition duration-300 cursor-pointer mt-2">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
