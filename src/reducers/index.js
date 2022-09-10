import { actionTypes } from "../actions";

const initialState = {
    movies: {
        all: [],
        latest: [],
        recommended: [],
        upcoming: []
    },
    isLoading: {
        movies: false,
    },
    errored: {
        movies: false,
    },
    bookings: []
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MOVIES.FETCH_PENDING:
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    movies: true
                }
            }
        case actionTypes.MOVIES.FETCH_SUCCESS:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    [action.category]: action.data
                },
                isLoading: {
                    ...state.isLoading,
                    movies: false
                }
            }
        case actionTypes.MOVIES.FETCH_FAILURE:
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    movies: false
                },
                errored: {
                    ...state.errored,
                    movies: true
                }
            }
        case actionTypes.MOVIES.CONFIRM_BOOKING:
            return {
                ...state,
                bookings: [...state.bookings, action.payload]
            }
        default:
            return state;
    }
}