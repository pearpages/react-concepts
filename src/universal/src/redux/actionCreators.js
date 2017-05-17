import { SET_LANDING_SEARCH_TERM, SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions';

export function setLandingSearchTerm(landingSearchTerm) {
    return { type: SET_LANDING_SEARCH_TERM, landingSearchTerm: landingSearchTerm };
}

export function setSearchTerm(searchTerm) {
    return { type: SET_SEARCH_TERM, searchTerm: searchTerm };
}

export function addOMDBData(imdbID, omdbData) {
    return { type: ADD_OMDB_DATA, imdbID, omdbData };
}

export function getOMDBDetails(imdbID) {
    return function (dispatch, getState) {
        window.fetch('http://www.omdbapi.com/?i=' + imdbID)
            .then(response => {
                dispatch(addOMDBData(imdbID, response.data));
            });
    }
}