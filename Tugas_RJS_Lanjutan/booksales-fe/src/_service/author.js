import API from "../_api"
import axios from "axios";


export const getAuthors = async () => {
  const response = await axios.get("http://localhost:8000/api/authors");
  return response.data.data;
};

