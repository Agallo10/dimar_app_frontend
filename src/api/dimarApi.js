import axios from "axios";
import { getEnvVar } from "../helpers";

const { VITE_API_URL } = getEnvVar();

const dimarApi = axios.create({
  baseURL: VITE_API_URL,
});

export default dimarApi;