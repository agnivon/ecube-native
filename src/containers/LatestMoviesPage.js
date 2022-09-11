import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { s } from '../bootstrap';
import { Text, Divider } from '@rneui/themed';
import { useSelector } from 'react-redux';

import MovieCardList from '../components/MovieCardList';
import ActivityIndicator from '../components/ActivityIndicatior';
import MessageDialog from '../components/MessageDialog';

export default function LatestMoviesPage({ navigation }) {

    const movies = useSelector(state => state.movies.latest);
    const moviesIsLoading = useSelector(state => state.isLoading.movies);
    // const isMoviesErrored = useSelector(state => state.errored.movies);

    if (moviesIsLoading) {
        return (<ActivityIndicator />);
    }

    return (
        <View style={[s.container, s.flex1]}>
            <Text h1 style={[s.textCenter, s.m2]}>
                Latest Movies
            </Text>
            <Divider />
            {movies.length ? <MovieCardList movies={movies} /> :
                <MessageDialog title="No movies found"
                    text="No movies available currently" />}
            <StatusBar style="auto" />
        </View>
    );
}