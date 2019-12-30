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
  UNSUBSCRIBE,
  VIDEO_COMMENT_SUCCESS,
  FETCH_CHANNEL_SUCCESS,
  FETCH_CHANNEL_ERROR,
  VIDEO_COMMENT_ERROR,
  REMOVE_CHANNEL
} from "../constants";

//History reducer
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

//Subscription reducer
const subscribeReducer = (channel = [], action) => {
  switch (action.type) {
    case SUBSCRIBE:
      return [...channel, action.payload];
    case UNSUBSCRIBE:
      return channel.filter(name => name !== action.payload);
    default:
      return channel;
  }
};

//Search video reducer
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

//Fetch channel information reducer
const channelInfoReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CHANNEL_SUCCESS:
      return [...state, action.payload];
    case FETCH_CHANNEL_ERROR:
      return action.payload;
    case REMOVE_CHANNEL:
      return state.filter(channel => channel.title !== action.payload);
    default:
      return state;
  }
};

//Fetch trending videos reducer
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

//Video selected reducer
const videoSelectReducer = (videoSelected = null, action) => {
  switch (action.type) {
    case VIDEO_SELECTED:
      return action.payload;
    default:
      return videoSelected;
  }
};

//Light or Dark theme reducer
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

//Display of the videos as a grid or list reducer
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

//Comments per video reducer
const commentReducer = (comments = [], action) => {
  switch (action.type) {
    case VIDEO_COMMENT_SUCCESS:
      return action.payload;
    case VIDEO_COMMENT_ERROR:
      return action.payload;
    default:
      return comments;
  }
};

//combine reducers
export default combineReducers({
  fetchData: fetchDataReducer,
  popularData: popularVideoReducer,
  videoSelected: videoSelectReducer,
  theme: themeReducer,
  history: historyOfVideos,
  comments: commentReducer,
  viewType: viewReducer,
  subscription: subscribeReducer,
  channelInfo: channelInfoReducer
});
