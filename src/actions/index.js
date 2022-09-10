import { API_URLS } from "../config";

export const actionTypes = {
    'MOVIES': {
        'FETCH_REQUESTED': 'movies/fetch/requested',
        'FETCH_PENDING': 'movies/fetch/pending',
        'FETCH_SUCCESS': 'movies/fetch/success',
        'FETCH_FAILURE': 'movies/fetch/fail',
        'CONFIRM_BOOKING': 'movies/booking/confirm'
    }
}

export const getMovies = (category = "all") => {
    return ({
        type: actionTypes.MOVIES.FETCH_REQUESTED,
        payload: {
            category: category,
            url: API_URLS.MOVIES[category.toUpperCase()]
        }
    });
}

export const confirmBooking = (booking) => {
    return ({
        type: actionTypes.MOVIES.CONFIRM_BOOKING,
        payload: booking
    });
}