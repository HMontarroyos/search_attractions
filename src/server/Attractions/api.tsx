import axios from "axios";

const baseUrl = "https://api-search-attractions.vercel.app/attractions";
const api = axios.create({ baseURL: baseUrl });

export const getAttractionsAllCountry = async (
  country: string
): Promise<any> => {
  try {
    const response = await api.get(`${baseUrl}/all/${country}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching atractions country: ${country}`);
  }
};

export const getAttractionsAllState = async (state: string): Promise<any> => {
  try {
    const response = await api.get(`${baseUrl}/all/state/${state}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching atractions country in state : ${state}`);
  }
};
