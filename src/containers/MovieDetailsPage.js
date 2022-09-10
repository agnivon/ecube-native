import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, FlatList } from 'react-native';
import { s } from '../bootstrap';
import { Text, Divider } from '@rneui/themed';

import MovieDetailsCard from '../components/MovieDetailsCard';
import { useFindMovie } from '../hooks';

export default function MovieDetailsPage({ route }) {

    const movie = useFindMovie(route.params.id);

    return (
        <View style={[s.container]}>
            <Text h1 style={[s.textCenter, s.m2]}>
                Movie Details
            </Text>
            <Divider />
            {/* <FlatList 
                data={[1, 2, 3, 4, 5]}
                renderItem={() =><Text></Text>}
                ListHeaderComponent={<MovieDetailsCard movie={movie}/>}
            /> */}
            <MovieDetailsCard movie={movie} />
            <StatusBar style="auto" />
        </View>
    );
}