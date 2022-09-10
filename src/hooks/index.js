import _ from 'lodash';
import { useSelector } from 'react-redux';

export function useFindMovie(id) {
    const movies = useSelector(state => state.movies.all);
    const movie = _.find(movies, { id: id });
    return movie;
}

export function useFindBooking(bookingId) {
    const bookings = useSelector(state => state.bookings);
    const booking = _.find(bookings, { 
        bookingId: bookingId
    });
    return booking;
}