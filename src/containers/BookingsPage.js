import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { s } from '../bootstrap';
import { Text, Divider } from '@rneui/themed';

import BookingCardList from '../components/BookingCardList';
import MessageDialog from '../components/MessageDialog'
import { useSelector } from 'react-redux';


export default function BookingsPage({ navigation }) {

    const bookings = useSelector(state => state.bookings);

    return (
        <View style={[s.container, s.flex1]}>
            <Text h1 style={[s.textCenter, s.m2]}>
                Bookings
            </Text>
            <Divider />
            {bookings.length ? <BookingCardList bookings={bookings}/> :
            <MessageDialog title="No Bookings" text="Make a booking to see bookings here"/>}
            <StatusBar style="auto" />
        </View>
    );
}