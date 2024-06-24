import React, { useContext, useEffect, useState } from "react";
import img1 from "./../assets/images/img1.jpg";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("theme", theme);
  }, []);

  return (
    <div className="flex  items-center px-6 py-4  ">
      <img
        src={img1}
        width={85}
        height={70}
        alt=""
        className=" w-[83px] h-[60px] mainLogo "
      />
      <div className="flex bg-slate-200  w-full  p-2 items-center m-4  mainLogo">
        <PiMagnifyingGlassBold size={20} />
        <input
          type="text"
          placeholder="Search Games..."
          className="bg-transparent outline-none mx-2 items-center  "
        />
      </div>
      <div className="flex mainLogo">
        {theme === "light" ? (
          <LuMoon
            size={35}
            className="bg-slate-200 text-black  p-1 cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <MdOutlineWbSunny
            size={35}
            className="bg-gray-200 text-black  p-1 cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
