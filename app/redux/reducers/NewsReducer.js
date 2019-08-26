import TYPES from "../types";

const initialState = {
  isLoading: true,
  articles: [],
  currentStoriesPageNumber: 1,
  isFetchingStories: false
};

const NewsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.NEWS.GET_ALL:
      return { ...state, isLoading: payload.isLoading, articles: [...payload.articles], currentStoriesPageNumber: 1, isFetchingStories: false };
    case TYPES.NEWS.START_GET_MORE:
      return { ...state, isFetchingStories: true };
    case TYPES.NEWS.GET_MORE:
      return {
        ...state,
        isLoading: payload.isLoading,
        articles: [...payload.articles],
        currentStoriesPageNumber: payload.currentStoriesPageNumber,
        isFetchingStories: false
      };

    default:
      return state;
  }
};

export default NewsReducer;
