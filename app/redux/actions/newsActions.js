import TYPES from "../types";

export const getAllNewsList = () => dispatch => {
  console.log("getAllNewsList   = = ===Stated");

  //   return fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d6af1ecb82144c4f84d3cfa4ebef2371")
  // return fetch("https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=2xXyBSNaMcvgVGY87tG3ETAfLwk8z9dJ&page=1")
  return fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=d6af1ecb82144c4f84d3cfa4ebef2371&page=1")
    .then(res => res.json())
    .then(res => {
      console.log("res from getAllNewsList -================->>", res.articles[0]);
      dispatch({
        type: TYPES.NEWS.GET_ALL,
        payload: {
          isLoading: true,
          articles: res.articles
        }
      });
    });
};
export const getMoreStores = (pageNumber, CurrentArticles) => dispatch => {
    console.log("getMoreStores   = = ===pageNumber", pageNumber);
  dispatch({ type: TYPES.NEWS.START_GET_MORE });
  //   return fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d6af1ecb82144c4f84d3cfa4ebef2371")
  return fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=d6af1ecb82144c4f84d3cfa4ebef2371&page=${pageNumber}`)
    .then(res => res.json())
    .then(res => {
      //   console.log("res from getAllNewsList -================->>", res.results[0]);
      dispatch({
        type: TYPES.NEWS.GET_MORE,
        payload: {
          isLoading: true,
          articles: [...CurrentArticles, ...res.articles],
          currentStoriesPageNumber: pageNumber
        }
      });
    });
};

// return (
//     fetch(
//       "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=Taylor%20Swift&safeSearch=false",
//       {
//         method: "GET",
//         headers: {
//           "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
//           "x-rapidapi-key": "153e912dffmsh7ae6c05e9d0b7e6p171917jsnebfcabd3a8c2"
//         }
//       }
//     )
