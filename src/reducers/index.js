import { combineReducers } from "redux";
import _ from "lodash";

import {
  THEME_LIGHT,
  THEME_DARK,
  VIDEO_SELECTED,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  FETCH_POPULAR_DATA_SUCCESS,
  FETCH_POPULAR_DATA_ERROR,
  LIGHT,
  DARK,
  VIDEO_WATCHED,
  GRID,
  LIST,
  SUBSCRIBE,
  UNSUBSCRIBE
} from "../constants";

const historyOfVideos = (history = [], action) => {
  switch (action.type) {
    case VIDEO_WATCHED:
      let historyDup = [...history, action.payload];
      let non_duplicated_data = _.uniqBy(historyDup, "etag");
      return non_duplicated_data;
    default:
      return history;
  }
};

const subscribeReducer = (channel = [], action) => {
  switch (action.type) {
    case SUBSCRIBE:
      let channelDup = [...channel, action.payload];
      return channelDup;
    case UNSUBSCRIBE:
      return channel.filter(name => name !== action.payload);
    default:
      return channel;
  }
};

const fetchDataReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.payload;
    case FETCH_DATA_ERROR:
      return action.payload;
    default:
      return state;
  }
};

const popularVideoReducer = (popularVideos = {}, action) => {
  switch (action.type) {
    case FETCH_POPULAR_DATA_SUCCESS:
      return action.payload;
    case FETCH_POPULAR_DATA_ERROR:
      return action.payload;
    default:
      return popularVideos;
  }
};

const videoSelectReducer = (videoSelected = null, action) => {
  switch (action.type) {
    case VIDEO_SELECTED:
      return action.payload;
    default:
      return videoSelected;
  }
};

const themeReducer = (light = LIGHT, action) => {
  switch (action.type) {
    case THEME_LIGHT:
      return LIGHT;
    case THEME_DARK:
      return DARK;
    default:
      return light;
  }
};

const viewReducer = (display = GRID, action) => {
  switch (action.type) {
    case GRID:
      return GRID;
    case LIST:
      return LIST;
    default:
      return display;
  }
};

const commentReducer = (comments = [], action) => {
  switch (action.type) {
    case "VIDEO_COMMENT_SUCCESS":
      return action.payload;
    case "VIDEO_COMMENT_ERROR":
      return action.payload;
    default:
      return comments;
  }
};

export default combineReducers({
  fetchData: fetchDataReducer,
  popularData: popularVideoReducer,
  videoSelected: videoSelectReducer,
  theme: themeReducer,
  history: historyOfVideos,
  comments: commentReducer,
  viewType: viewReducer,
  subscription: subscribeReducer
});
