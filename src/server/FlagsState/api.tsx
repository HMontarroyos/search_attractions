import axios from "axios";

const baseUrl = "https://api-search-attractions.vercel.app/states";
const api = axios.create({ baseURL: baseUrl });

export const getState = async (state: string): Promise<any> => {
  try {
    const response = await api.get(`${baseUrl}/${state}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching  in state: ${state}`);
  }
};

export const getAllStates = async (): Promise<any> => {
  try {
    const response = await api.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching all states`);
  }
};

