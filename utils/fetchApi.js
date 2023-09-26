
import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '31fa5d0a1fmshf0532532d0ec5b2p106638jsn299a498c70bc' ,
    },
  });
    
  return data;
}
