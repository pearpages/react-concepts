import { SET_LANDING_SEARCH_TERM, SET_SEARCH_TERM } from './actions';

export function setLandingSearchTerm(landingSearchTerm) {
    return { type: SET_LANDING_SEARCH_TERM, landingSearchTerm: landingSearchTerm };
}

export function setSearchTerm(searchTerm) {
    return { type: SET_SEARCH_TERM, searchTerm: searchTerm };
}