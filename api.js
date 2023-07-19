import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
