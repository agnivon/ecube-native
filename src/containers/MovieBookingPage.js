import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { s } from '../bootstrap';
import { Text, Divider } from '@rneui/themed';

import MovieBookingCard from '../components/MovieBookingCard';
import { useFindMovie } from '../hooks';

export default function MovieBookingPage({ route }) {

    const movie = useFindMovie(route.params.id);

    return (
        <View style={[s.container]}>
            <Text h1 style={[s.textCenter, s.m2]}>
                Book Show
            </Text>
            <Divider />
            <MovieBookingCard movie={movie} />
            <StatusBar style="auto" />
        </View>
    );
}