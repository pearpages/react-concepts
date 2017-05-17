import { SET_LANDING_SEARCH_TERM, SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions';

const DEFAULT_STATE = {
    landingSearchTerm: '',
    searchTerm: '',
    omdbData: {}
}

function rootReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SET_LANDING_SEARCH_TERM:
            return setLandingSearchTerm(state, action);
        case SET_SEARCH_TERM:
            return setSearchTerm(state, action);
        case ADD_OMDB_DATA:
            return addOmdbData(state,action);
        default:
            return state;
    }
}

function setLandingSearchTerm(state, action) {
    return Object.assign({}, state, { landingSearchTerm: action.landingSearchTerm });
}

function setSearchTerm(state, action) {
    return Object.assign({}, state, { searchTerm: action.searchTerm });
}

function addOmdbData(state, action) {
    const newOmdbData = {};
    Object.assign(newOmdbData, state.omdbData, {[action.imdbID]: action.omdbData});
    const newState = {};
    Object.assign(newState, state, {omdbData: newOmdbData});
    return newState;
}

export default rootReducer;