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
  LIST,
  GRID,
  VIDEO_WATCHED,
  SUBSCRIBE,
  UNSUBSCRIBE,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_ERROR,
  VIDEO_COMMENT_ERROR,
  VIDEO_COMMENT_SUCCESS,
  REMOVE_CHANNEL,
  YOUTUBE_SEARCH_URL,
  YOUTUBE_SEARCH_POPULAR_VIDEOS_URL,
  YOUTUBE_CHANNEL_INFO,
  YOUTUBE_VIDEO_COMMENT
} from "../constants";

export const videoWatched = video => {
  return {
    type: VIDEO_WATCHED,
    payload: video
  };
};

export const subscribe = video => {
  return {
    type: SUBSCRIBE,
    payload: video
  };
};

export const unsubscribe = video => {
  return {
    type: UNSUBSCRIBE,
    payload: video
  };
};

export const removeChannel = video => {
  return {
    type: REMOVE_CHANNEL,
    payload: video
  };
};

export const light = _ => {
  return {
    type: THEME_LIGHT
  };
};

export const dark = _ => {
  return {
    type: THEME_DARK
  };
};

export const grid = _ => {
  return {
    type: GRID
  };
};

export const list = _ => {
  return {
    type: LIST
  };
};

export const videoSelected = video => {
  return {
    type: VIDEO_SELECTED,
    payload: video
  };
};

export const fetchData = (term, maxResults = 50) => async dispatch => {
  try {
    const response = await axios.get(YOUTUBE_SEARCH_URL, {
      params: {
        part: "snippet",
        q: term,
        key: API_KEY,
        maxResults: maxResults
      }
    });
    const cleanResponse = response.data.items.filter(
      el => el.id.kind === "youtube#video"
    );
    dispatch({ type: FETCH_DATA_SUCCESS, payload: cleanResponse });
  } catch (error) {
    dispatch({ type: FETCH_DATA_ERROR, payload: ERROR });
  }
};

export const searchPopularVideos = (maxResults = 50) => async dispatch => {
  try {
    const response = await axios.get(YOUTUBE_SEARCH_POPULAR_VIDEOS_URL, {
      params: {
        part: "snippet",
        chart: "mostPopular",
        key: API_KEY,
        maxResults: maxResults
      }
    });
    dispatch({
      type: FETCH_POPULAR_DATA_SUCCESS,
      payload: response.data.items
    });
  } catch (error) {
    dispatch({ type: FETCH_POPULAR_DATA_ERROR, payload: error });
  }
};

export const videoComment = videoId => async dispatch => {
  try {
    const comments = await axios.get(YOUTUBE_VIDEO_COMMENT, {
      params: {
        part: "snippet",
        maxResults: 15,
        key: API_KEY,
        videoId: videoId,
        textFormat: "plainText"
      }
    });
    dispatch({
      type: VIDEO_COMMENT_SUCCESS,
      payload: comments.data.items
    });
  } catch (error) {
    dispatch({ type: VIDEO_COMMENT_ERROR, payload: error });
  }
};

export const channelInfo = videoId => async dispatch => {
  try {
    const response = await axios.get(YOUTUBE_CHANNEL_INFO, {
      params: {
        part: "snippet",
        key: API_KEY,
        id: videoId
      }
    });

    const amountOfSubscribers = await axios.get(YOUTUBE_CHANNEL_INFO, {
      params: {
        part: "statistics",
        key: API_KEY,
        id: videoId
      }
    });
    const { subscriberCount } = amountOfSubscribers.data.items[0].statistics;
    dispatch({
      type: FETCH_CHANNEL_SUCCESS,
      payload: { ...response.data.items[0].snippet, subscriberCount }
    });
  } catch (error) {
    dispatch({ type: FETCH_CHANNEL_ERROR, payload: ERROR });
  }
};
