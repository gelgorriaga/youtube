import axios from "axios";
import {
  THEME_LIGHT,
  THEME_DARK,
  VIDEO_SELECTED,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  FETCH_POPULAR_DATA_SUCCESS,
  FETCH_POPULAR_DATA_ERROR,
  API_KEY,
  ERROR,
  YOUTUBE_SEARCH_URL,
  YOUTUBE_SEARCH_POPULAR_VIDEOS_URL
} from "../constants";

export const videoWatched = (video) =>{
return{
    type: 'VIDEO_WATCHED',
    payload: video
}
}

export const light = () => {
  return {
    type: THEME_LIGHT
  };
};

export const dark = () => {
  return {
    type: THEME_DARK
  };
};

export const videoSelected = video => {
  return {
    type: VIDEO_SELECTED,
    payload: video
  };
};

export const fetchData = (term, maxResults = 20) => async dispatch => {
  try {
    const response = await axios.get(
      YOUTUBE_SEARCH_URL,
      {
        params: {
          part: "snippet",
          q: term,
          key: API_KEY,
          maxResults: maxResults
        }
      }
    );
    dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data.items });
  } catch (error) {
    dispatch({ type: FETCH_DATA_ERROR, payload: ERROR });
  }
};

export const searchPopularVideos = (maxResults = 20) => async dispatch => {
  try {
    const response = await axios.get(
      YOUTUBE_SEARCH_POPULAR_VIDEOS_URL,
      {
        params: {
          part: "snippet",
          chart: "mostPopular",
          key: API_KEY,
          maxResults: maxResults
        }
      }
    );
    console.log(response.data.items);
    dispatch({
      type: FETCH_POPULAR_DATA_SUCCESS,
      payload: response.data.items
    });
  } catch (error) {
    dispatch({ type: FETCH_POPULAR_DATA_ERROR, payload: error });
  }
};
