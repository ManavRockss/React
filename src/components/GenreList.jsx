import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const GenreList = ({ genreId }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
  }, []);
  const getGenreList = async () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold dark:text-white px-3 py-5 ">Genre</h2>
      {genreList.map((item, index) => (
        <div
          onClick={() => {
            setActiveIndex(index);
            genreId(item.id);
            selectedGenreName(item.name);
          }}
          className={` flex gap-1 items-center cursor-pointer group hover:bg-gray-100 m-4 hover:rounded-lg hover:dark:bg-gray-400 ${
            activeIndex === index
              ? "hover:bg-gray-100 hover:dark:bg-gray-400"
              : null
          }`}
        >
          <img
            src={item.image_background}
            className="w-[50px] h-[50px] object-cover m-1 rounded-lg group-hover:scale-105 transition-all ease-in-out duration-500 "
          />
          <h3 className="dark:text-white items-center font-md text-xl hover:dark:text-black group-hover:font-bold transition-all ease-in-out duration-300">
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GenreList;
