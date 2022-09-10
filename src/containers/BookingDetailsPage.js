import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { s } from '../bootstrap';
import { Text, Divider } from '@rneui/themed';
import BookingDetailsCard from '../components/BookingDetailsCard';

import { useFindBooking } from '../hooks';

export default function BookingDetailsPage({ route }) {

    const booking = useFindBooking(route.params.id);

    return (
        <View style={[s.container]}>
            <Text h1 style={[s.textCenter, s.m2]}>
                Booking Details
            </Text>
            <Divider />
            <BookingDetailsCard booking={booking} />
            <StatusBar style="auto" />
        </View>
    );
}