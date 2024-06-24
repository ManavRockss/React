import React, { useEffect } from "react";

function Banner({ gameBanner }) {
  useEffect(() => {}, []);
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-4 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-3xl text-blue-600 font-bold m-2">
          {gameBanner.name}
        </h2>
        <button className="rounded-lg bg-blue-700 font-semibold hover:bg-blue-500 text-white px-2 py-2 m-2">
          Buy Now
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        className=" md:h-[450px] sm:h-[500px] w-full object-cover rounded-[10px]"
      />
    </div>
  );
}

export default Banner;
