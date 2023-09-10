
import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '1d3f402b28msh565be2d6b30ca6ep123cd7jsnb135188b283e' ,
    },
  });
    
  return data;
}
