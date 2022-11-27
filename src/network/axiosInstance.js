import axios from "axios";
import { API_KEY, OMDB_URL } from "../constants";

export default axios.create({
  validateStatus: (status) => status < 400,
  baseURL: `${OMDB_URL}?apikey=${API_KEY}&`,
});
