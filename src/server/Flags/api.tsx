import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1";
const api = axios.create({ baseURL: baseUrl });

export const getFlag = async (country: string): Promise<any> => {
  try {
    const response = await api.get(`${baseUrl}/name/${country}`);
    return response.data[0].flags;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching flag");
  }
};
