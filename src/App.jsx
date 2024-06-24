import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme === "dark" ? "bg-[#121212]" : null
        } rounded-lg
     h-full`}
      >
        <Header />
        <Homepage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
