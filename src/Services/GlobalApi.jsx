import axios from "axios";

const key = "ca24475f830a438aa72c46dcecfa1d0a";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});
const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListByGenreId = (id) =>
  axiosCreate.get("/games?key=" + key + "&genres=" + id);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
