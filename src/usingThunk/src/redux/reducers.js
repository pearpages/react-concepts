import { SET_LANDING_SEARCH_TERM, SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
    landingSearchTerm: '',
    searchTerm: ''
}

function rootReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SET_LANDING_SEARCH_TERM:
            return setLandingSearchTerm(state, action);
        case SET_SEARCH_TERM:
            return setSearchTerm(state, action);
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

export default rootReducer;