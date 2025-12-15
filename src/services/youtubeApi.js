import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const options = {
  params: {
    maxResults: 50,
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  },
};

export const fetchFromAPI = async (url, params = {}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, {
      ...options,
      params: {
        ...options.params,
        ...params,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};
