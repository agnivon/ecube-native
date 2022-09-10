import { View, FlatList, Text } from 'react-native';
import { s, c } from '../bootstrap';

import BookingDetailsCard from './BookingDetailsCard';
import Space from './Space';

const renderItem = ({ item }) => {
    return (
        <BookingDetailsCard key={item.bookingId} booking={item} showButtons={false} />
    );
}

export default function BookingCardList({ bookings }) {

    const DATA = bookings;

    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.bookingId}
                ListFooterComponent={<Space lines={8} />}
            />
        </View>
    );
}