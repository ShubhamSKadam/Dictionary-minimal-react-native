import axios from "axios";

export const fetchData = async (inputText) => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
